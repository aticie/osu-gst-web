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
  </div>
</template>