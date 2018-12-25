const mapChooser = (locationName) => {
    if (!locationName) {
        locationName = 'none';
    }
    return `${locationName}.png`;
};

export default mapChooser;