<template>
  <bekSidebar
    :visible.sync="$root.sidebar"
    style="width: 300px; min-width: 300px;"
  >
    <div css-color="sidebar">
      <div
        css-padding="md"
        autofocus
      >
        <bekInput
          css-display="block"
          css-full-width
          placeholder="Type to search..."
          css-color="sidebar"
          css-shadow="no"
          @input="search"
        />
      </div>
      <bekList v-if="typeof searchResult === 'undefined'">
        <bekListItem expanded>
          <i class="fa fa-code" /> Components
          <bekList slot="sub-list">
            <bekListItem expanded>
              Main
              <bekList slot="sub-list">
                <bekListItem
                  tag="router-link"
                  to="/components/theme-provider"
                  :class="{ selected: isSelected('component', 'theme-provider') }"
                >
                  Theme Provider
                </bekListItem>
              </bekList>
            </bekListItem>
            <bekListItem expanded>
              Layout
              <bekList slot="sub-list">
                <bekListItem
                  tag="router-link"
                  to="/components/layout"
                  :class="{ selected: isSelected('component', 'layout') }"
                >
                  Layout
                </bekListItem>
                <bekListItem
                  tag="router-link"
                  to="/components/header"
                  :class="{ selected: isSelected('component', 'header') }"
                >
                  Header
                </bekListItem>
                <bekListItem
                  tag="router-link"
                  to="/components/sidebar"
                  :class="{ selected: isSelected('component', 'sidebar') }"
                >
                  Sidebar
                </bekListItem>
                <bekListItem
                  tag="router-link"
                  to="/components/content"
                  :class="{ selected: isSelected('component', 'content') }"
                >
                  Content
                </bekListItem>
                <bekListItem
                  tag="router-link"
                  to="/components/footer"
                  :class="{ selected: isSelected('component', 'footer') }"
                >
                  Footer
                </bekListItem>
              </bekList>
            </bekListItem>
            <bekListItem expanded>
              Form
              <bekList slot="sub-list">
                <bekListItem
                  tag="router-link"
                  to="/components/form"
                  :class="{ selected: isSelected('component', 'form') }"
                >
                  Form
                </bekListItem>
                <bekListItem
                  tag="router-link"
                  to="/components/form-element"
                  :class="{ selected: isSelected('component', 'form-element') }"
                >
                  Form Element
                </bekListItem>
                <bekListItem
                  tag="router-link"
                  to="/components/input"
                  :class="{ selected: isSelected('component', 'input') }"
                >
                  Input
                </bekListItem>
                <bekListItem expanded>
                  Dropdown Select
                  <bekList slot="sub-list">
                    <bekListItem
                      tag="router-link"
                      to="/components/select"
                      :class="{ selected: isSelected('component', 'select') }"
                    >
                      Select
                    </bekListItem>
                    <bekListItem
                      tag="router-link"
                      to="/components/select-option"
                      :class="{ selected: isSelected('component', 'select-option') }"
                    >
                      Option
                    </bekListItem>
                  </bekList>
                </bekListItem>
                <bekListItem
                  tag="router-link"
                  to="/components/datepicker"
                  :class="{ selected: isSelected('component', 'datepicker') }"
                >
                  Datepicker
                </bekListItem>
                <bekListItem
                  tag="router-link"
                  to="/components/check"
                  :class="{ selected: isSelected('component', 'check') }"
                >
                  Check Box / Radio Button
                </bekListItem>
                <bekListItem
                  tag="router-link"
                  to="/components/switch"
                  :class="{ selected: isSelected('component', 'switch') }"
                >
                  Switch
                </bekListItem>
                <bekListItem
                  tag="router-link"
                  to="/components/button"
                  :class="{ selected: isSelected('component', 'button') }"
                >
                  Button
                </bekListItem>
                <bekListItem
                  tag="router-link"
                  to="/components/input-group"
                  :class="{ selected: isSelected('component', 'input-group') }"
                >
                  Input Group
                </bekListItem>
              </bekList>
            </bekListItem>
            <bekListItem expanded>
              Other
              <bekList slot="sub-list">
                <bekListItem
                  tag="router-link"
                  to="/components/dialog"
                  :class="{ selected: isSelected('component', 'dialog') }"
                >
                  Dialog (Modal)
                </bekListItem>
                <bekListItem
                  tag="router-link"
                  to="/components/menu"
                  :class="{ selected: isSelected('component', 'menu') }"
                >
                  Menu (Popup)
                </bekListItem>
                <bekListItem expanded>
                  Table
                  <bekList slot="sub-list">
                    <bekListItem
                      tag="router-link"
                      to="/components/table"
                      :class="{ selected: isSelected('component', 'table') }"
                    >
                      Table
                    </bekListItem>
                    <bekListItem
                      tag="router-link"
                      to="/components/table-row"
                      :class="{ selected: isSelected('component', 'table-row') }"
                    >
                      Table Row
                    </bekListItem>
                    <bekListItem
                      tag="router-link"
                      to="/components/table-field"
                      :class="{ selected: isSelected('component', 'table-field') }"
                    >
                      Table Field
                    </bekListItem>
                  </bekList>
                </bekListItem>
                <bekListItem expanded>
                  List
                  <bekList slot="sub-list">
                    <bekListItem
                      tag="router-link"
                      to="/components/list"
                      :class="{ selected: isSelected('component', 'list') }"
                    >
                      List
                    </bekListItem>
                    <bekListItem
                      tag="router-link"
                      to="/components/list-item"
                      :class="{ selected: isSelected('component', 'list-item') }"
                    >
                      List Item
                    </bekListItem>
                  </bekList>
                </bekListItem>
                <bekListItem expanded>
                  Slider/Tab
                  <bekList slot="sub-list">
                    <bekListItem
                      tag="router-link"
                      to="/components/slider"
                      :class="{ selected: isSelected('component', 'slider') }"
                    >
                      Slider
                    </bekListItem>
                    <bekListItem
                      tag="router-link"
                      to="/components/slide-label"
                      :class="{ selected: isSelected('component', 'slide-label') }"
                    >
                      Slide Label
                    </bekListItem>
                    <bekListItem
                      tag="router-link"
                      to="/components/slide-content"
                      :class="{ selected: isSelected('component', 'slide-content') }"
                    >
                      Slide Content
                    </bekListItem>
                  </bekList>
                </bekListItem>
                <bekListItem
                  tag="router-link"
                  to="/components/loading"
                  :class="{ selected: isSelected('component', 'loading') }"
                >
                  Loading
                </bekListItem>
                <bekListItem
                  tag="router-link"
                  to="/components/input-box"
                  :class="{ selected: isSelected('component', 'input-box') }"
                >
                  Input Box
                </bekListItem>
                <bekListItem
                  tag="router-link"
                  to="/components/pagination"
                  :class="{ selected: isSelected('component', 'pagination') }"
                >
                  Pagination
                </bekListItem>
              </bekList>
            </bekListItem>
          </bekList>
        </bekListItem>
      </bekList>
    </div>
  </bekSidebar>
</template>

<script>
import appLogo from './appLogo.vue';

export default {
  components: {
    appLogo,
  },
  data() {
    return {
      query: '',
      searchResult: undefined,
    };
  },
  methods: {
    isSelected(paramName, name) {
      return name === this.$route.params[paramName];
    },
    search(str = '') {
      if (!str || !str.length) {
        this.searchResult = undefined;
      } else {
        this.searchResult = sidebarItems.search(str);
      }
    },
  },
};
</script>