<template>
  <bekLayout>
    <!-- <span slot="x"></span> -->
    <appHeader
      slot="header"
      title="Bek"
    >
      <bekButton
        tag="router-link"
        to="/get-started"
        css-color="header"
        css-border="no"
        css-shadow="no"
      >
        <i class="fa fa-book" /> Documentions
      </bekButton>
    </appHeader>
    <bekContent slot="content">
      <div
        css-max-width="sm"
        css-padding-y="xl"
        css-margin-x="auto"
        css-text-align="center"
      >
        <div>
          <app-logo />
        </div>
        <div>
          <h2
            css-text-size="xl"
            css-padding="md"
          >
            Bek
          </h2>
          <p css-text-size="lg">
            <b>Fast</b>, <b>Responsive</b>, <b>Without Dependencies</b>, <b>Both Direction Support</b> and <b>Configurable</b> UI Framework based on <a
              class="bek-link"
              href="http://vuejs.org"
              target="_blank"
            >Vue.js</a>.
          </p>
          <div css-padding="md">
            <bekButton
              tag="router-link"
              to="/get-started"
              css-color="primary"
              css-shadow="no"
            >
              <i class="fa fa-play" />
              GET STARTED
            </bekButton>
            <span css-space-x="md" />
            <bekButton
              tag="a"
              :href="$root.githubRepo"
              target="_blank"
              css-color="background"
              css-shadow="no"
            >
              <i class="fa fa-github" />
              GITHUB
            </bekButton>
          </div>
        </div>
      </div>

      <appFeatures css-padding-y="xl" />
    </bekContent>
    <appFooter slot="footer" />
  </bekLayout>
</template>

<script>
import appHeader from '../components/appHeader.vue';
import appFooter from '../components/appFooter.vue';
import appLogo from '../components/appLogo.vue';
import appFeatures from '../components/appFeatures.vue';

export default {
  components: {
    appHeader,
    appFooter,
    appLogo,
    appFeatures,
  },
  data() {
    return {
      x: 'breaked',
      y: 'up',
      slide: undefined,
    };
  },
  methods: {
    log(...x) {
      console.log(...x);
    },
  },
  style({ className }) {
    return [
      className('features', {

      }),
    ];
  },
};
</script>
