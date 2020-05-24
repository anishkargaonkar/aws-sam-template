import { handler } from "../goodbye";

describe('hello handler', () => {
  it('should say hello', async () => {
    const result = await handler();
    expect(result).toMatchSnapshot();
  });
});
