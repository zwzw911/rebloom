import Red from '@albert-team/red'

/**
 * Options interface
 */
export interface OptionsInterface {
  client?: Red
  host?: string
  port?: number
  redisClientOptions?: object
}

/**
 * Options class
 */
export default class Options implements OptionsInterface {
  /**
   * Redis client (only [Red](https://www.npmjs.com/package/@albert-team/red) is compatible).
   * If provided, ignore host, port and redisClientOptions.
   */
  public client: Red
  public host: string = 'localhost'
  public port: number = 6379
  /**
   * Options passed directly to the Redis client constructor
   */
  public redisClientOptions: object = {}

  constructor(options: OptionsInterface) {
    Object.assign(this, options)
  }
}
