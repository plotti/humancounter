/*
 ******************************************************************************
 *  Copyright (c) 2015 Particle Industries, Inc.  All rights reserved.
 *
 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation, either
 * version 3 of the License, or (at your option) any later version.
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public
 * License along with this library; if not, see <http://www.gnu.org/licenses/>.
 ******************************************************************************
 */

/* HC-SR04 Ping / Range finder wiring:
 * -----------------------------------
 * Particle - HC-SR04
 *      GND - GND
 *      VIN - VCC
 *       D2 - TRIG
 *       D6 - ECHO
 */
 
#pragma SPARK_NO_PREPROCESSOR
#include "application.h"
int cm = 0;
int threshold_distance = 100;
boolean tracking = false;
boolean i_see_human = false;
long last_time_seen;
static float max_blackout_in_millis = 500;
int min_observed_count_needed = 2;
int human_count = 0;
int observed_humans = 0;

int ping(pin_t trig_pin, pin_t echo_pin, uint32_t wait, bool info)
{
    uint32_t duration, inches, cm;
    static bool init = false;
    if (!init) {
        pinMode(trig_pin, OUTPUT);
        digitalWriteFast(trig_pin, LOW);
        pinMode(echo_pin, INPUT);
        delay(50);
        init = true;
    }

    /* Trigger the sensor by sending a HIGH pulse of 10 or more microseconds */
    digitalWriteFast(trig_pin, HIGH);
    delayMicroseconds(10);
    digitalWriteFast(trig_pin, LOW);

    duration = pulseIn(echo_pin, HIGH);

    /* Convert the time into a distance */
    // Sound travels at 1130 ft/s (73.746 us/inch)
    // or 340 m/s (29 us/cm), out and back so divide by 2
    // Ref: http://www.parallax.com/dl/docs/prod/acc/28015-PING-v1.3.pdf
    inches = duration / 74 / 2;
    cm = duration / 29 / 2;

    // if (info) { /* Visual Output */
    //     Serial.printf("%2d:", inches);
    //     for(int x=0;x<inches;x++) Serial.print("#");
    //     Serial.println();
    // } else { /* Informational Output */
    //     Serial.printlnf("%6d in / %6d cm / %6d us", inches, cm, duration);
    // }
    delay(wait); // slow down the output
    return cm;
}

void setup() {
    Serial.begin(115200);
    Particle.variable("cm", cm);
    Particle.variable("human_count", &human_count, INT)
}

void loop() {
    // Trigger pin, Echo pin, delay (ms), visual=true|info=false
    cm = ping(D2, D6, 20, true);
    i_see_human = cm < threshold_distance;
    if(i_see_human && !tracking) // we have first contact with human
    {
      observed_humans = 1;
      tracking = true;
      last_time_seen = millis();
    }
    else if(i_see_human && tracking) // we already recognized him and we keep tracking him
    {
      observed_humans++;
      last_time_seen = millis();
    }
    else if(!i_see_human && tracking){
      if((millis() - last_time_seen) < max_blackout_in_millis)
      {
        // we dont see him now, but we believe he may still be in sight
      }
      else // we havent seen him for too long
      {
        tracking = false;
        if(observed_humans >= min_observed_count_needed){
          human_count++;
          Serial.printf("Humans %2d:", human_count);
          Particle.publish("humancount", String(human_count));
        }
      }
    }
    else
    {
      // !iSeeHuman && !iTrackHuman - nothing to do
    }
}
