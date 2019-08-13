const Pannen = {
    template: "#pannen-template",
    methods: {
        clickPan: function() {
            this.$router.push({ name: 'PannenWeg' });
        }
    },
    mounted: function() {
        imageMapResize();
    },
}

export { Pannen }