const travelDetails = require("./src/data/travel.js")

exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
  graphql,
}) => {
  const { createNode } = actions
  const promises = []

  for (const trip of travelDetails) {
    promises.push(
      createNode({
        ...trip,
        id: createNodeId(`${trip.country}-${trip.date}`),
        parent: null,
        children: [],
        internal: {
          type: `TravelDetail`,
          contentDigest: createContentDigest(JSON.stringify(trip)),
        },
      })
    )
  }
  return Promise.all(promises)
}
