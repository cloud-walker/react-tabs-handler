const isRollup = true

module.exports = {
  presets: [['env', isRollup ? {modules: false} : {}], 'react'],
  plugins: [
    'transform-class-properties',
    'transform-object-rest-spread',
  ].filter(Boolean),
}
