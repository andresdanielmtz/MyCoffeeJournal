import { create } from 'zustand';
import { Map } from 'mapbox-gl';

type Store = {
    count: number
    inc: () => void
    map: Map | null
    setMap: (map: Map) => void
}

const useStore = create<Store>()((set) => ({
    count: 1,
    inc: () => set((state) => ({ count: state.count + 1 })),
    map: null,
    setMap: (map) => set({ map })
}))

export default useStore; 