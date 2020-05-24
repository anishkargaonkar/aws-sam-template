import { handler } from "../hello";

describe('hello handler', () => {
  it('should say hello', async () => {
    const result = await handler();
    expect(result).toMatchSnapshot();
  });
});
