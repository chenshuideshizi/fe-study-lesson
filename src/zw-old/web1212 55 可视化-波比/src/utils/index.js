let id = 0;

export const hash = () => ++id;

export const deepCopy = target => {
  if (target && typeof target === 'object') {
    const result = Array.isArray(target) ? [] : {};
    for (const k in target) {
      if (typeof target[k] === 'object') {
        result[k] = deepCopy(target[k])
      }
      else {
        result[k] = target[k]
      }
    }

    return result
  }

  return target
}