
import { useStore } from 'zustand';
function BearCounter() {
    const bears = useStore((state) => state.bears)
    return <h1>{bears} around here...</h1>
  }