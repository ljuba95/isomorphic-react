import NotificationsViewer from '../NotificationsViewer'
import renderer from 'react-test-renderer'
import React from 'react'
import delay from 'redux-saga'

//must use jest.mock for local modules
jest.mock("../../services/NotificationsService")

//must be under jest.mock, not hoisted
const notificationsService = require('../../services/NotificationsService').default

describe("The notification viewer", () => {

  beforeAll(() => {
    notificationsService.setCount(42)
  })

  it("should display the correct number of notifications", async () => {
    const tree = renderer
      .create(
        <NotificationsViewer/>
      )

    //wait for lifecycles
    await delay()

    const instance = tree.root
    const component = instance.findByProps({className: 'notifications'})
    const text = component.children[0]

    expect(text).toEqual('42 Notifications!')
  })
})