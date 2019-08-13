const Trap = {
    template: "#trap-template",
    methods: {
        clickHal: function() {
            this.$router.push({ name: 'Hal' });
        },
        clickZoom: function() {
            this.$router.push({ name: 'TrapZoomed' });
        }
    },
    mounted: function() {
        imageMapResize();
    },
}

export { Trap }