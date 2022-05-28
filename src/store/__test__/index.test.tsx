import store from '../'
import { membersActions } from "../members"
import Member from '../../models/member'

const member1: Member = {
    id: 1,
    username: "user1",
    role: "role1",
    picture: "user1.png"
}

const member2: Member = {
    id: 2,
    username: "user2",
    role: "role2",
    picture: "user2.png"
}

describe('Members redux state tests', () => {
    it('Should initially set members to an empty array', () => {
        const state = store.getState().members;
        expect(state.members.length).toBe(0);
    })

    it('Should be able to add a new member (if not exists) to the members', () => {
        store.dispatch(membersActions.add(member1));
        store.dispatch(membersActions.add(member2));

        let state = store.getState().members;
        expect(state.members.length).toBe(2);
        expect(state.members[0]).toMatchObject(member1);

        // should not add again
        store.dispatch(membersActions.add(member1));

        state = store.getState().members;
        expect(state.members.length).toBe(2);
    })

    it('Should be able to remove an existing member from members', () => {
        store.dispatch(membersActions.add(member1));
        store.dispatch(membersActions.add(member2));

        let state = store.getState().members;
        expect(state.members.length).toBe(2);

        // removing the member1
        store.dispatch(membersActions.remove(1));

        state = store.getState().members;
        expect(state.members.length).toBe(1);
        expect(state.members[0]).toMatchObject(member2)
    })
})