const TrapZoomed = {
    template: "#trap-zoomed-template",
    methods: {
        clickMan: function() {
            if (!this.$store.state.$tookMan2) {
                this.collectToy("man2");
                this.$store.state.$tookMan2 = true;
            }
        }
    },
    mounted: function() {
        imageMapResize();
    },
}

export { TrapZoomed }