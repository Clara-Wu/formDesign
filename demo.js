Vue.component("vuedraggable", window.vuedraggable);
var app = new Vue({
  el: "#app",
  components: {
    vuedraggable: window.vuedraggable, //当前页面注册组件
  },
  data() {
    return {
      originData: [
        {
          name: "Page",
          isSelected: true,
          data_id: "page",
          property: {
            title: "页面",
            class: "form_page",
          },
          event: {},
        },
        {
          name: "Row",
          span: 2,
          gutter: 10,
          isSelected: false,
          data_id: "row",
          property: {
            title: "row",
            class: "form_row",
          },
          event: {},
        },
        {
          name: "Navbar",
        },
        {
          name: "Form",
        },
        {
          name: "Button Group",
        },
        {
          name: "Button",
        },
        {
          name: "Section",
        },
        {
          name: "Input",
        },
        {
          name: "Hidden",
        },
        {
          name: "Table",
        },
        {
          name: "Columns",
        },
        {
          name: "Details",
        },
        {
          name: "Text",
        },
        {
          name: "Details",
        },
        {
          name: "Text",
        },
        {
          name: "TextArea",
        },
        {
          name: "Checkboxes",
        },
        {
          name: "Checkbox",
        },
        {
          name: "Radios",
        },
        {
          name: "Select",
        },
        {
          name: "Option",
        },
        {
          name: "DatePicket",
        },
      ],
      id: "aaa",
      items: [],
      pageBox: "",
      rowBox: "",
      propertyBox: "",
    };
  },
  methods: {
    add(item) {
      let uuid = this.guid();
      var attr = null;
      this.propertyBox = this.initPageProperty(item);
      if (item.data_id == "page") {
        this.pageBox += this.addPage(uuid, item);
        attr = {
          id: uuid,
          isSelected: true,
          type: "page",
          row: [],
        };
      } else if (item.data_id == "row") {
        this.rowBox += this.addRow(uuid, item);
      }
      this.items.push(attr);
    },
    dragstart(e, item) {
      console.log("start");
      console.log(e);
      e.dataTransfer.setData("item", item.data_id);
    },
    dragEnter(e, item) {
      console.log("enter");
      console.log(e);
    },
    dragend(e, item) {
      console.log("end");
      console.log(e);
      e.dataTransfer.clearData();
    },
    drop(e) {
      console.log("drop");
      console.log(e);
      let item = this.originData.filter((el) => {
        return el.data_id == e.dataTransfer.getData("item");
      });
      console.log(item);
      this.add(item[0]);
    },
    S4() {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    },
    guid() {
      return (
        this.S4() +
        this.S4() +
        "-" +
        this.S4() +
        "-" +
        this.S4() +
        "-" +
        this.S4() +
        "-" +
        this.S4() +
        this.S4() +
        this.S4()
      );
    },
    // 添加page
    addPage(uuid, item) {
      var html = "";
      // var className = "";
      // if (!item.isSelected) {
      //   className = item.class;
      // } else {
      //   className = item.class + " isSelected";
      // }

      html += `<div class="form_page isSelected" id="${uuid}"'>
                <h4>${item.property.title}</h4>
                <div class="form_page_content" @drop="drop" @dragover.prevent v-html="${this.rowBox}"></div>
            </div> 
            `;
      return html;
    },
    initPageProperty(item) {
      console.log(item);
      var html = "";
      html += `
      <div class="item_property">
          <span>标题</span>
          <input type="text" v-model="${item.property.title}"/>
      </div>
      `;
      return html;
    },
    // 添加Row
    addRow(uuid, item) {
      var html = "";
      // var className = "";
      // if (!item.isSelected) {
      //   className = item.class;
      // } else {
      //   className = item.class + " isSelected";
      // }
      html += `
      <i-row id="${uuid}">
          <i-col span="12">col-12</i-col>
          <i-col span="12">col-12</i-col>
      </i-row>
      `;

      return html;
    },
  },
});
