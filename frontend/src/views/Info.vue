<script setup lang="ts">
import InfoStaff from '../components/info/InfoStaff.vue';
</script>

<template>
  <div class="flex flex-col gap-10 pb-10">
    <section class="info-container">
      <div class="info-head">
        <h1>SCHEDULES</h1>
        <p>All times are in UTC+08.</p>
      </div>

      <div class="info-content">
        <div>
          <h1>ONLINE PHASE</h1>
          <p>13TH NOVEMBER - 11TH DECEMBER</p>

          <ol>
            <li>
              <h1>Registration Period</h1>
              <p>13 November - 27th November</p>
            </li>
            <li>
              <h1>Qualifiers Showcase</h1>
              <p>28th November 22:00</p>
            </li>
            <li>
              <h1>Qualifier Stage</h1>
              <p>29th November - 10th December</p>
            </li>
            <li>
              <h1>Qualifier Results + Event Mappool Showcase</h1>
              <p>11th December 22:00</p>
            </li>
          </ol>
        </div>

        <div>
          <h1>OFFLINE PHASE</h1>
          <p>17TH DECEMBER 14:00 - 19:40</p>
        </div>
      </div>
    </section>

    <section class="info-container">
      <div class="info-head">
        <h1>DIRECTIONS</h1>
        <p>Assuming you're in Singapore, of course.</p>

      </div>
      <div class="info-content">
        <div>
          <h1>KALLANG WAVE MALL</h1>
          <p>1 STADIUM PL, SINGAPORE 397628</p>
        </div>

        <iframe
          class="h-80"
          loading="lazy"
          allowfullscreen
          referrerpolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCltV8mIvQRpJXvplqmmlw9YlcWM-R19iE
            &q=1.3027715981306334,103.87357898182611">
        </iframe>

        <p>If you're looking to get here via public transit, the nearest MRT station is Stadium (CC6), directly next to
          Kallang Wave Mall. There is an alternative route alighting at Kallang (EW10) that requires a bit of walking.
        </p>

        <img src="../assets/mrtMap.png" alt="mrt map"
          class="w-5/6 rounded-lg mx-auto" />

        <div>
          <h1>ESPORTS EXPERIENCE CENTER</h1>
          <p>#02-09/10, Kallang Wave Mall</p>
        </div>

        <p>The entire bracket stage of GST:LIVE 2022 will be held in the main event space inside Esports Experience
          Center
        </p>

        <img src="../assets/Gam3GG.png" alt="gam3gg image" class="w-5/6 rounded-lg mx-auto" />
      </div>
    </section>

    <section class="info-container">
      <div class="info-head">
        <h1>PRIZES</h1>
        <p>Per player, w00t!!</p>
      </div>

      <div class="info-content">
        <div>
          <h1>1ST PLACE</h1>

          <ol>
            <li>
              <p>Unique Profile Badge</p>
            </li>
            <li>
              <p>Physical Medal</p>
            </li>
            <li>
              <p>12 months of osu!supporter</p>
            </li>
          </ol>
        </div>

        <div>
          <h1>2ND PLACE</h1>

          <ol>
            <li>
              <p>Physical Medal</p>
            </li>
            <li>
              <p>6 months of osu!supporter</p>
            </li>
          </ol>
        </div>
      </div>
    </section>

    <section class="info-container">
      <div class="info-head">
        <h1>STAFF</h1>
        <p>We do... Stuff.</p>
      </div>

      <div class="info-content">
        <div>
          <h1>ORGANISER</h1>

          <InfoStaff 
            :users="[
              {
                id: 7537133,
                username: 'megumic'
              },
              {
                id: 8301957,
                username: '_gt'
              }
            ]"
          />
        </div>

        <div>
          <h1>CUSTOM MAPPER</h1>
          
          <InfoStaff 
            :users="[
              {
                id: 7605060,
                username: '-Eresh'
              },
              {
                id: 2427693,
                username: '[ -Scarlet- ]'
              },
              {
                id: 19270348,
                username: 'Amami Yuu'
              },
              {
                id: 5312202,
                username: 'bongo'
              },
              {
                id: 689997,
                username: 'captin1'
              },
              {
                id: 18730172,
                username: 'chaser01'
              },
              {
                id: 5286213,
                username: 'Deppyforce'
              },
              {
                id: 12704035,
                username: 'Fsjallink'
              },
              {
                id: 2123087,
                username: 'hehe'
              },
              {
                id: 11194087,
                username: 'Ixcors'
              },
              {
                id: 7823498,
                username: 'Kotoha'
              },
              {
                id: 5404892,
                username: 'Kowari'
              },
              {
                id: 10734032,
                username: 'Mrgglock'
              },
              {
                id: 5875419,
                username: 'newton-'
              },
              {
                id: 1843447,
                username: 'oneplusone'
              },
              {
                id: 6639059,
                username: 'P4ndemonium'
              },
              {
                id: 10820856,
                username: 'Shirahane Suou'
              },
              {
                id: 9162649,
                username: 'Slyze-'
              },
              {
                id: 2500099,
                username: 'sorciere'
              },
              {
                id: 6151332,
                username: 'squirrelpascals'
              },
              {
                id: 3388082,
                username: 'ThunderBird2678'
              },
              {
                id: 2715118,
                username: 'Voltaeyx'
              },
              {
                id: 7904667,
                username: 'xidorn'
              },
            ]"
          />
        </div>

        <div>
          <h1>Developer</h1>
          
          <InfoStaff 
            :users="[
              {
                id: 5642779,
                username: 'heyronii'
              },
              {
                id: 10440852,
                username: 'Sibyl'
              }
            ]"
          />
        </div>

        <div>
          <h1>GFX Artist</h1>

          <InfoStaff 
            :users="[
              {
                id: 8244635,
                username: 'Hecatia'
              },
              {
                id: 27014435,
                username: 'iroha_2807'
              },
              {
                id: 7537133,
                username: 'megumic'
              },
              {
                id: 11825315,
                username: 'NoPengoo'
              },
            ]"
          />
        </div>

        <div>
          <h1>On-site Staff</h1>

          <InfoStaff 
            :users="[
              {
                id: 8547527,
                username: 'Dreamy'
              },
              {
                id: 10592989,
                username: 'ellyn'
              }
            ]"
          />
        </div>

        <div>
          <h1>Wiki Editor</h1>

          <InfoStaff 
            :users="[
              {
                id: 8301957,
                username: '_gt'
              }
            ]"
          />
        </div>
      </div>
    </section>

    <section class="info-container">
      <div class="info-head">
        <h1>RULESETS</h1>
        <p>Play by the book!</p>
      </div>

      <div class="info-content">
        <div>
          <h1>Registration</h1>

          <ol>
            <li>
              <p>Registration will be through <a href="https://gstlive.org/">this website</a></p>
            </li>
            <li>
              <p><a href="https://github.com/underscoregt/osu-wiki/tree/master/wiki/Tournaments/Badge-weighted_seeding">Badge-weighted seeding</a>(BWS) will be used with the formula of rank^(0.9937^(badges^2)).</p>
            </li>
            <li>
              <p>Average team BWS rank must be #2000 or lower.</p>
            </li>
          </ol>
        </div>
      </div>

      <div class="info-content">
        <div>
          <h1>Qualifiers regulations</h1>

          <ol>
            <li>
              <p>All teams will play through the Qualifiers pool, consisting of 9 maps, in order from A1 to A9.</p>
            </li>
            <li>
              <p>Each team must play through all the maps; failure to do so will result in disqualification.</p>
            </li>
            <li>
              <p>If a player disconnects or encounters any technical issues within the first 30 seconds of a map, they are allowed to replay that particular map after the lobby is done with all the remaining maps.</p>
            </li>
            <li>
              <p>Only the top 8 teams will proceed to the Bracket Stage. Seeding in Qualifiers will be determined by the sum of z-score in each map.</p>
            </li>
          </ol>
        </div>
      </div>

      <div class="info-content">
        <div>
          <h1>Bracket Stage regulations</h1>

          <ol>
            <li>
              <p>The Bracket Stage will be held offline on 17 December 2022 at AEF Online 2022. By signing up, you agree that you are free and will be showing up to the event should you place top 8 in Qualifiers. Should there be an emergency such that you are unable to make the event, please let the staff know by messaging megumic (ue#0001) or _gt (gt#8668) on Discord.</p>
            </li>
            <li>
              <p>If a player is not present at the time of their match, the match will be forfeited. The staff reserves the right to ban absent players for future iterations of GST and GST:LIVE.</p>
            </li>
            <li>
              <p>There will be 2 mappools: the Quarterfinals pool will be Bo7, and the Semifinals/Finals pool will be Bo9.</p>
            </li>
          </ol>
        </div>
      </div>

      <div class="info-content">
        <div>
          <h1>Match procedure</h1>

          <ol>
            <li>
              <p>The higher !roll gets to choose pick order.</p>
            </li>
            <li>
              <p>Each team will be given a maximum of 90 seconds for picking maps. Failure to decide before the time limit will result in the action being passed to the opponent.</p>
            </li>
            <li>
              <p>For each map that does not require the Hidden mod, players may choose to play said maps with Hidden, with those scores divided by 1.06. As such, you are required to co-operate by putting on the required mods for each map as the multiplayer lobby will virtually permanently have Free Mod enabled.</p>
            </li>
            <li>
              <p>The mappool is designed such that if both teams reach match point, there will be 3 maps left.</p>
            </li>
            <li>
              <p>Both captains have to PM the referee which map they would like to ban out of the 3 maps within 90 seconds. Using the #multiplayer channel is strongly discouraged during this time.</p>
            </li>
            <li>
              <p>If both teams ban different maps, the 3rd map is played.</p>
            </li>
            <li>
              <p>If both teams ban the same map, the referee will do a !roll 2 to determine which map out of the remaining ones will be played, where 1 corresponds to the map listed higher on the mappool..</p>
            </li>
            <li>
              <p>If the tiebreaker map ends in a draw, captains will roll again and the lower roll gets to choose another tiebreaker within the remaining 2 maps.</p>
            </li>
          </ol>
        </div>
      </div>
      
    </section>
  </div>
</template>