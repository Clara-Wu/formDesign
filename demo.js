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
          type: "Page",
          label: "页面",
          isSelected: true,
          data_id: "page",
          // property: {
          //   title: "页面",
          //   class: "form_page",
          // },
          children: {
            rows: [],
          },
          event: {},
        },
        {
          type: "Row",
          label: "行",
          span: 2,
          gutter: 10,
          isSelected: false,
          data_id: "row",
          // property: {
          //   title: "row",
          //   class: "form_row",
          // },
          event: {},
        },
        {
          type: "Navbar",
          label: "",
        },
        {
          type: "Form",
          label: "",
        },
        {
          type: "Button Group",
          label: "",
        },
        {
          type: "Button",
          label: "",
        },
        {
          type: "Section",
          label: "",
        },
        {
          type: "Input",
          label: "",
        },
        {
          type: "Hidden",
          label: "",
        },
        {
          type: "Table",
          label: "",
        },
        {
          type: "Columns",
          label: "",
        },
        {
          type: "Details",
          label: "",
        },
        {
          type: "Text",
          label: "",
        },
        {
          type: "Details",
          label: "",
        },
        {
          type: "Text",
          label: "",
        },
        {
          type: "TextArea",
          label: "",
        },
        {
          type: "Checkboxes",
          label: "",
        },
        {
          type: "Checkbox",
          label: "",
        },
        {
          type: "Radios",
          label: "",
        },
        {
          type: "Select",
          label: "",
        },
        {
          type: "Option",
          label: "",
        },
        {
          type: "DatePicket",
          label: "",
        },
      ],
      id: "aaa",
      items: [],
      pageBox: "",
      rowBox: "",
      propertyBox: "",
      drag: false,
    };
  },
  methods: {
    add(item) {
      let uuid = this.guid();
      var attr = null;
      console.log(item)
      this.propertyBox = this.initPageProperty(item);
      if (item.data_id == "page") {
        this.pageBox += this.addPage(uuid, item);
        attr = {
          id: uuid,
          isSelected: true,
          type: "page",
          row: [],
        };
        console.log(attr)
      } else if (item.data_id == "row") {
        this.rowBox += this.addRow(uuid, item);
      }
      this.items.push(attr);
    },
    handleWidgetAdd(item){
      console.log("1111")
    },
    onEnd(){
      console.log("222")
    },
    handleFieldClick(item){
      console.log(item)
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
      // console.log(item);
      // this.add(item[0]);
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
                <h4>${item.label}</h4>
                <div class="form_page_content" @drop="drop" @dragover.prevent v-html="${this.rowBox}"></div>
            </div> 
            `;
      return html;
    },
    initPageProperty(item) {
      console.log(item)
      var html = "";
      html += `
      <div class="item_property">
          <span>标题</span>
          <input type="text" v-model="${item.label}"/>
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
