<template>
  <select v-model="language">
    <option value="en" selected>English</option>
    <option value="ja">日本語</option>
    <option value="zh-CN">中国語(簡体)</option>
  </select>
</template>
<script>
import { loadMessages } from "~/plugins/i18n";
export default {
  props: {
    except: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    // filter languages and exclude items that are in the except prop
    filtered_languages() {
      return this.languages.filter(item => {
        return !this.except.find(i => {
          if (this.default_language == i) {
            return false;
          }
          return i == item.value;
        });
      });
    }
  },
  data: () => ({
    language: null,
    default_language: "en",
    origin: location.origin + "/img/"
  }),
  methods: {
    // check if the current language saved in the browser is excluded
    // if so, change to default language
    checkLanguageNotExcepted() {
      if (this.except.find(i => i == this.$store.getters["lang/locale"])) {
        this.$store.dispatch("lang/setLocale", this.default_language);
        loadMessages(this.default_language);
      }
    }
  },
  mounted() {
    this.checkLanguageNotExcepted();
    this.language = this.$store.getters["lang/locale"];
  },
  watch: {
    language() {
      this.$store.dispatch("lang/setLocale", this.language);
      loadMessages(this.language);
    }
  }
};
</script>
<style lang="scss">

</style>
