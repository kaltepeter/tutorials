import Message from './Message';

describe('Message', () => {
    it('should always render the message', () => {
        const notImportantMessage = Message({
            content: 'I see everything twice',
            isImportant: false
        });
        expect(notImportantMessage.props.children.props.children).toBe('I see everything twice');

        const importantMessage = Message({
            content: 'I see everything twice',
            isImportant: true
        });
        expect(importantMessage.props.children.props.children).toBe('I see everything twice');
    });
    
    it('should make important message strong', () => {
        const importantMessage = Message({
            content: 'I see everything twice',
            isImportant: true
        });
        expect(importantMessage.props.children.type).toBe('strong');
    });

    it('should not make important message strong', () => {
        const notImportantMessage = Message({
            content: 'I see everything twice',
            isImportant: false
        });
        expect(notImportantMessage.props.children.type).not.toBe('strong');
    });
});