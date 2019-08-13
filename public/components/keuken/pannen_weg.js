const PannenWeg = {
    template: "#pannen-weg-template",
    methods: {
        clickBat: function() {
            this.collectToy("bat");
        }
    },
    mounted: function() {
        imageMapResize();
    },
}

export { PannenWeg }