<template>
  <div>
    <CssTransition />
    <Velocity />
    <ListTransitions />
    <StateTransition />
  </div>
</template>

<script>
import CssTransition from './CssTransition'
import Velocity from './Velocity'
import ListTransitions from './ListTransitions'
import StateTransition from './StateTransition'
export default {
  components: {
    CssTransition,
    Velocity,
    ListTransitions,
    StateTransition,
  }
}
</script>