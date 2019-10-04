import { PAGE_ID_HOME, UPDATE_PAGE, ADD_RANDOM_FISH_TANK_FEEDER } from "./actionTypes";

const initialState = {
	pageId: PAGE_ID_HOME,
	roomList:
	[
		{roomName: 'Living Room', roomId: 0},
		{roomName: 'Kitchen', roomId: 1},
		{roomName: 'Garage', roomId: 2},
	],
	tankLists:
	[
		{
			tankName: 'tank1',
			roomId: 0,
			foodCapacityLevel: 90,
			lastFeedInHours: 2,
			nextFeedInHours: 5,
		},
		{
			tankName: 'tank2',
			roomId: 1,
			foodCapacityLevel: 30,
			lastFeedInHours: 10,
			nextFeedInHours: 1,
		},
		{
			tankName: 'tank3',
			roomId: 2,
			foodCapacityLevel: 0,
			lastFeedInHours: 100,
			nextFeedInHours: -1,
		},
		{
			tankName: 'tank4',
			roomId: 0,
			foodCapacityLevel: 100,
			lastFeedInHours: 1,
			nextFeedInHours: 12,
		},
	],
}

export default function reducer( state = initialState, payload ) {
	switch ( payload.type ) {
		case UPDATE_PAGE: {
			return { ...state, pageId: payload.pageId };
		}
		case ADD_RANDOM_FISH_TANK_FEEDER: {
			var tankList = state.tankLists;
			tankList.push({
				tankName: payload.tankName,
				roomId: payload.roomId,
				foodCapacityLevel: payload.foodCapacityLevel,
				lastFeedInHours: payload.lastFeedInHours,
				nextFeedInHours: payload.nextFeedInHours
			});
			return { ...state, tankLists: tankList }
		}
    default: {
      return { ...state }
    }
	}
}
