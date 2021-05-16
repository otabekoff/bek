<template>
  <bekLayout>
    <appHeader
      slot="header"
      :title="'Bek - ' + title"
    />
    <appSidebar slot="start-sidebar" />
    <bekContent slot="content">
      <div
        css-max-width="md"
        css-padding="lg"
        css-margin-x="auto"
      >
        <appComponentDocs
          v-if="!loading"
          :bek-component="bekComponent"
        />
      </div>
    </bekContent>
    <appFooter slot="footer" />
  </bekLayout>
</template>

<script>
import * as Bek from 'bek';
import { dashCase } from 'bek/utility/utils.js';
import appHeader from '../components/appHeader.vue';
import appFooter from '../components/appFooter.vue';
import appSidebar from '../components/appSidebar.vue';
import appComponentDocs from '../components/appComponentDocs.vue';

export default {
  components: {
    appHeader,
    appFooter,
    appSidebar,
    appComponentDocs,
  },
  data() {
    return {
      loading: true,
      title: undefined,
      bekComponent: undefined,
    };
  },
  watch: {
    '$route.params.component': function (bekComponent) {
      this.loadData(bekComponent);
    },
  },
  created() {
    this.loadData(this.$route.params.component);
  },
  methods: {
    loadData(bekComponent) {
      this.loading = true;

      let componentName = '';
      let nextUpper = true;
      for (let i = 0; i < bekComponent.length; i++) {
        if (bekComponent[i] === '-') {
          nextUpper = true;
        } else if (nextUpper) {
          componentName += bekComponent[i].toUpperCase();
          nextUpper = false;
        } else {
          componentName += bekComponent[i].toLowerCase();
        }
      }

      this.title = componentName;

      this.bekComponent = Bek[this.title];
      this.$nextTick(() => {
        this.loading = false;
      });
    },
  },
};
</script>
