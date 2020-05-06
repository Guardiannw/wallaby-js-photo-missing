describe('wallaby', () => {
    it('should show the snapshot', async () => {
        const getPosts = async () => {
            throw new Error('12');
        };

        await expect(getPosts()).rejects.toThrowErrorMatchingSnapshot();
    });
});