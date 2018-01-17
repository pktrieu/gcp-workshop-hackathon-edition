/**
 * Given a request with a body containing a key 'data' with value [a : int,b : int],
 * responds with `a + b`
 *
 * @param {!Object} req Cloud Function request context.
 * @param {!Object} res Cloud Function response context.
 */
exports.helloWorld = function helloWorld(req, res) {
  if (req.body['0'] === undefined || req.body['1'] === undefined) {
    // This is an error case, as "data" is required.
    res.status(400).send('No data defined!');
  } else {
    // Parse data into variables a and b.
    a = parseInt(req.body['0']);
    b = parseInt(req.body['1']);

    // ==== BEGIN IMPLEMENTATION ====
    // TODO: Add `a` and `b` and store the result in `sum`.

    sum = -1
    // ==== END IMPLEMENTATION ====
    res.status(200).send(''+sum);
  }
};

