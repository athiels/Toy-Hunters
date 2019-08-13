const Keys = {
    template: "#keys-template",
    methods: {
        clickKey: function() {
            if (!this.$store.state.$tookKey) {
                this.collectItem("key");
                this.$store.state.$tookKey = true;
            }
        }
    },
    mounted: function() {
        imageMapResize();
    },
}

export { Keys }