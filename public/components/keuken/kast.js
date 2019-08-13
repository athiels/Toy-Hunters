const Kast = {
    template: "#kast-template",
    methods: {
        clickKast: function() {
            this.$router.push({ name: 'KastOpen' });
        }
    },
    mounted: function() {
        imageMapResize();
    },
}

export { Kast }