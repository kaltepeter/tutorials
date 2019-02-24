const axiosMock = jest.genMockFromModule('axios');

let mockResponse = {
    data: {
        "shops": [
        {
            "location": 'test location', 
            "address": 'test address'
        }
    ]
}
};

const req = () => {
    return new Promise((resolve) => {
        axiosMock.delayTimer = setTimeout(() => { 
            resolve(mockResponse); 
        }, 100);
    });
};

axiosMock.get.mockImplementation(req);

module.exports = axiosMock;