import Point from './Point'

class LazyPoint extends Point {
  /**
   *
   * @param {number} x
   * @param {number} y
   */
  constructor(x, y) {
    super(x, y)
  }

  /**
   * Update the x and y values
   *
   * @param {Point} point
   */
  update (point) {
    this.x = point.x
    this.y = point.y
  }

  /**
   * Move the point to another position using an angle and distance
   *
   * @param {number} angle The angle in radians
   * @param {number} distance How much the point should be moved
   */
  moveByAngle (angle, distance) {
    this.x = this.x + (Math.cos(angle) * distance)
    this.y = this.y + (Math.sin(angle) * distance)
  }

  /**
   * equalsTo
   *
   * @param {Point} point
   * @returns {boolean}
   */
  equalsTo (point) {
    return this.x === point.x && this.y === point.y
  }

  /**
   * Get the difference for x and y axis to another point
   *
   * @param {Point} point
   * @returns {Point}
   */
  getDifferenceTo (point) {
    return new Point(this.x - point.x, this.y - point.y)
  }

  getDistanceTo (point) {
    const diff = this.getDifferenceTo(point)

    return Math.sqrt(Math.pow(diff.x, 2) + Math.pow(diff.y, 2))
  }

  getAngleTo (point) {
    const diff = this.getDifferenceTo(point)

    return Math.atan2(diff.y, diff.x)
  }

  toObject () {
    return {
      x: this.x,
      y: this.y
    }
  }
}

export default LazyPoint