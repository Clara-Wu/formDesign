var app = new Vue({
    el: "#app",
    data() {
        return {
            originData: [
                {
                    name: "Page",
                    class: "form_page",
                    isSelected: false,
                    property: {
                        title: "页面",
                    },
                    event: {},
                },
                {
                    name: "Row",
                    class: "form_row",
                    grid: 2,
                    gutter: 10,
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
            id: 0,
            items: [],
            droppedItem: "",
        };
    },
    methods: {
        add(item) {
            console.log("🚀 ~ file: demo.js ~ line 81 ~ add ~ item", item);
            this.id++;
            if(item.isSelected){
                item.class=item.class+' isSelected'
            }
            if (item.name == "Page") {
                this.droppedItem += `
                <div class="${item.class}" id='${this.id}'>
                    <h4>${item.property.title}</h4>
                    <div class=""></div>
                </div>
                `;
                console.log(this.droppedItem);
            }
        },
        dragstart(e, item) {            
            this.add(item);
            // this.droppedItem = e.dataTransfer.getData('item')
        },
        dragend(e, item) {
            e.dataTransfer.setData("item", item.name);
        },
        drop(e) {
            e.dataTransfer.clearData();
        },
    },
});
