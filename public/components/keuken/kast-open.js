const KastOpen = {
    template: "#kast-open-template",
    methods: {
        clickLamp: function() {
            if (!this.$store.state.$tookLamp) {
                this.collectItem("lamp");
                this.$store.state.$tookLamp = true;
            }
        }
    },
    mounted: function() {
        imageMapResize();
    },
}

export { KastOpen }