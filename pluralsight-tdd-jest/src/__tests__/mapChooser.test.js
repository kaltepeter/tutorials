import mapChooser from '../mapChooser';

describe('mapChooser', () => {
    it('returns an image based on input given to it', () => {
        let expected = 'portland.jpg';
        let actual = mapChooser('portland');
        expect(actual).toEqual(expected);
    });

    it('returns a default image when no input given to it', () => {
        let expected = 'default.jpg';
        let actual = mapChooser('');
        expect(actual).toEqual(expected);
    });
});