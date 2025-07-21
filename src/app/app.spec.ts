import { App } from "./app"

describe('App', () => {
  it('should have a defined title', () => {
    const component = new App()
    expect(component.title).toBeDefined()
  })
})