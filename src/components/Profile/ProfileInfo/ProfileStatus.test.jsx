import React from 'react';
import {create} from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

const testText = 'Непобедимость есть оборона; возможность победить есть наступление'

describe('Profile status component', () => {
    test('status from props should be in the state', () => {
        const component = create(<ProfileStatus
            status={testText} isOwner updateStatus={x => x}/>)
        const instance = component.getInstance()
        expect(instance.state.status).toBe(testText)
    })
    test('after creation <input> should not be displayed', () => {
        const component = create(<ProfileStatus
            status={testText} isOwner updateStatus={x => x}/>)
        const instance = component.root
        expect(() => {
            instance.findByType('input')
        }).toThrow()

    })
    test('status from props should be displayed', () => {
        const component = create(<ProfileStatus
            status={testText} isOwner updateStatus={x => x}/>)
        const instance = component.root
        let span = instance.findByType('span')
        expect(span.children[0]).toBe(testText)
    })
    test('input should be displayed in editMode instead of span', () => {
        const component = create(<ProfileStatus
            status={testText} isOwner updateStatus={x => x}/>)
        const instance = component.root
        let span = instance.findByType('span')
        span.props.onDoubleClick()
        let input = instance.findByType('input')
        expect(input.props.value).toBe(testText)
    })
    test('callback should be called', () => {
        const mockCallback = jest.fn()
        const component = create(<ProfileStatus
            status={testText} updateStatus={mockCallback} isOwner/>)
        const instance = component.getInstance()
        instance.deactivateEditMode()
        expect(mockCallback.mock.calls.length).toBe(1)
    })
})

