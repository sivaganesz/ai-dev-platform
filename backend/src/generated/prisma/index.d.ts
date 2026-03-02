
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Role
 * 
 */
export type Role = $Result.DefaultSelection<Prisma.$RolePayload>
/**
 * Model Team
 * 
 */
export type Team = $Result.DefaultSelection<Prisma.$TeamPayload>
/**
 * Model ActiveSession
 * 
 */
export type ActiveSession = $Result.DefaultSelection<Prisma.$ActiveSessionPayload>
/**
 * Model ApiKey
 * 
 */
export type ApiKey = $Result.DefaultSelection<Prisma.$ApiKeyPayload>
/**
 * Model KeyActivityLog
 * 
 */
export type KeyActivityLog = $Result.DefaultSelection<Prisma.$KeyActivityLogPayload>
/**
 * Model UserProfileExt
 * 
 */
export type UserProfileExt = $Result.DefaultSelection<Prisma.$UserProfileExtPayload>
/**
 * Model ThemePreference
 * 
 */
export type ThemePreference = $Result.DefaultSelection<Prisma.$ThemePreferencePayload>
/**
 * Model SecurityIncident
 * 
 */
export type SecurityIncident = $Result.DefaultSelection<Prisma.$SecurityIncidentPayload>
/**
 * Model SecurityAuditLog
 * 
 */
export type SecurityAuditLog = $Result.DefaultSelection<Prisma.$SecurityAuditLogPayload>
/**
 * Model CompanyProfile
 * 
 */
export type CompanyProfile = $Result.DefaultSelection<Prisma.$CompanyProfilePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserStatus: {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE',
  PENDING: 'PENDING'
};

export type UserStatus = (typeof UserStatus)[keyof typeof UserStatus]


export const SessionStatus: {
  ACTIVE: 'ACTIVE',
  IDLE: 'IDLE',
  EXPIRED: 'EXPIRED'
};

export type SessionStatus = (typeof SessionStatus)[keyof typeof SessionStatus]


export const ApiKeyStatus: {
  ACTIVE: 'ACTIVE',
  EXPIRED: 'EXPIRED',
  REVOKED: 'REVOKED'
};

export type ApiKeyStatus = (typeof ApiKeyStatus)[keyof typeof ApiKeyStatus]

}

export type UserStatus = $Enums.UserStatus

export const UserStatus: typeof $Enums.UserStatus

export type SessionStatus = $Enums.SessionStatus

export const SessionStatus: typeof $Enums.SessionStatus

export type ApiKeyStatus = $Enums.ApiKeyStatus

export const ApiKeyStatus: typeof $Enums.ApiKeyStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.role`: Exposes CRUD operations for the **Role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.role.findMany()
    * ```
    */
  get role(): Prisma.RoleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.team`: Exposes CRUD operations for the **Team** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Teams
    * const teams = await prisma.team.findMany()
    * ```
    */
  get team(): Prisma.TeamDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.activeSession`: Exposes CRUD operations for the **ActiveSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ActiveSessions
    * const activeSessions = await prisma.activeSession.findMany()
    * ```
    */
  get activeSession(): Prisma.ActiveSessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.apiKey`: Exposes CRUD operations for the **ApiKey** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ApiKeys
    * const apiKeys = await prisma.apiKey.findMany()
    * ```
    */
  get apiKey(): Prisma.ApiKeyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.keyActivityLog`: Exposes CRUD operations for the **KeyActivityLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more KeyActivityLogs
    * const keyActivityLogs = await prisma.keyActivityLog.findMany()
    * ```
    */
  get keyActivityLog(): Prisma.KeyActivityLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userProfileExt`: Exposes CRUD operations for the **UserProfileExt** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserProfileExts
    * const userProfileExts = await prisma.userProfileExt.findMany()
    * ```
    */
  get userProfileExt(): Prisma.UserProfileExtDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.themePreference`: Exposes CRUD operations for the **ThemePreference** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ThemePreferences
    * const themePreferences = await prisma.themePreference.findMany()
    * ```
    */
  get themePreference(): Prisma.ThemePreferenceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.securityIncident`: Exposes CRUD operations for the **SecurityIncident** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SecurityIncidents
    * const securityIncidents = await prisma.securityIncident.findMany()
    * ```
    */
  get securityIncident(): Prisma.SecurityIncidentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.securityAuditLog`: Exposes CRUD operations for the **SecurityAuditLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SecurityAuditLogs
    * const securityAuditLogs = await prisma.securityAuditLog.findMany()
    * ```
    */
  get securityAuditLog(): Prisma.SecurityAuditLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.companyProfile`: Exposes CRUD operations for the **CompanyProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CompanyProfiles
    * const companyProfiles = await prisma.companyProfile.findMany()
    * ```
    */
  get companyProfile(): Prisma.CompanyProfileDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.4.2
   * Query Engine version: 94a226be1cf2967af2541cca5529f0f7ba866919
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Role: 'Role',
    Team: 'Team',
    ActiveSession: 'ActiveSession',
    ApiKey: 'ApiKey',
    KeyActivityLog: 'KeyActivityLog',
    UserProfileExt: 'UserProfileExt',
    ThemePreference: 'ThemePreference',
    SecurityIncident: 'SecurityIncident',
    SecurityAuditLog: 'SecurityAuditLog',
    CompanyProfile: 'CompanyProfile'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "role" | "team" | "activeSession" | "apiKey" | "keyActivityLog" | "userProfileExt" | "themePreference" | "securityIncident" | "securityAuditLog" | "companyProfile"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Role: {
        payload: Prisma.$RolePayload<ExtArgs>
        fields: Prisma.RoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findFirst: {
            args: Prisma.RoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findMany: {
            args: Prisma.RoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          create: {
            args: Prisma.RoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          createMany: {
            args: Prisma.RoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          delete: {
            args: Prisma.RoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          update: {
            args: Prisma.RoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          deleteMany: {
            args: Prisma.RoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          upsert: {
            args: Prisma.RoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          aggregate: {
            args: Prisma.RoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRole>
          }
          groupBy: {
            args: Prisma.RoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoleCountArgs<ExtArgs>
            result: $Utils.Optional<RoleCountAggregateOutputType> | number
          }
        }
      }
      Team: {
        payload: Prisma.$TeamPayload<ExtArgs>
        fields: Prisma.TeamFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeamFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeamFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          findFirst: {
            args: Prisma.TeamFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeamFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          findMany: {
            args: Prisma.TeamFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>[]
          }
          create: {
            args: Prisma.TeamCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          createMany: {
            args: Prisma.TeamCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TeamCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>[]
          }
          delete: {
            args: Prisma.TeamDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          update: {
            args: Prisma.TeamUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          deleteMany: {
            args: Prisma.TeamDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeamUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TeamUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>[]
          }
          upsert: {
            args: Prisma.TeamUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          aggregate: {
            args: Prisma.TeamAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeam>
          }
          groupBy: {
            args: Prisma.TeamGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeamGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeamCountArgs<ExtArgs>
            result: $Utils.Optional<TeamCountAggregateOutputType> | number
          }
        }
      }
      ActiveSession: {
        payload: Prisma.$ActiveSessionPayload<ExtArgs>
        fields: Prisma.ActiveSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActiveSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActiveSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActiveSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActiveSessionPayload>
          }
          findFirst: {
            args: Prisma.ActiveSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActiveSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActiveSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActiveSessionPayload>
          }
          findMany: {
            args: Prisma.ActiveSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActiveSessionPayload>[]
          }
          create: {
            args: Prisma.ActiveSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActiveSessionPayload>
          }
          createMany: {
            args: Prisma.ActiveSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ActiveSessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActiveSessionPayload>[]
          }
          delete: {
            args: Prisma.ActiveSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActiveSessionPayload>
          }
          update: {
            args: Prisma.ActiveSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActiveSessionPayload>
          }
          deleteMany: {
            args: Prisma.ActiveSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ActiveSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ActiveSessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActiveSessionPayload>[]
          }
          upsert: {
            args: Prisma.ActiveSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActiveSessionPayload>
          }
          aggregate: {
            args: Prisma.ActiveSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateActiveSession>
          }
          groupBy: {
            args: Prisma.ActiveSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActiveSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ActiveSessionCountArgs<ExtArgs>
            result: $Utils.Optional<ActiveSessionCountAggregateOutputType> | number
          }
        }
      }
      ApiKey: {
        payload: Prisma.$ApiKeyPayload<ExtArgs>
        fields: Prisma.ApiKeyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApiKeyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApiKeyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          findFirst: {
            args: Prisma.ApiKeyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApiKeyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          findMany: {
            args: Prisma.ApiKeyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>[]
          }
          create: {
            args: Prisma.ApiKeyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          createMany: {
            args: Prisma.ApiKeyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ApiKeyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>[]
          }
          delete: {
            args: Prisma.ApiKeyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          update: {
            args: Prisma.ApiKeyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          deleteMany: {
            args: Prisma.ApiKeyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ApiKeyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ApiKeyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>[]
          }
          upsert: {
            args: Prisma.ApiKeyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          aggregate: {
            args: Prisma.ApiKeyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApiKey>
          }
          groupBy: {
            args: Prisma.ApiKeyGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApiKeyGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApiKeyCountArgs<ExtArgs>
            result: $Utils.Optional<ApiKeyCountAggregateOutputType> | number
          }
        }
      }
      KeyActivityLog: {
        payload: Prisma.$KeyActivityLogPayload<ExtArgs>
        fields: Prisma.KeyActivityLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.KeyActivityLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeyActivityLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.KeyActivityLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeyActivityLogPayload>
          }
          findFirst: {
            args: Prisma.KeyActivityLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeyActivityLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.KeyActivityLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeyActivityLogPayload>
          }
          findMany: {
            args: Prisma.KeyActivityLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeyActivityLogPayload>[]
          }
          create: {
            args: Prisma.KeyActivityLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeyActivityLogPayload>
          }
          createMany: {
            args: Prisma.KeyActivityLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.KeyActivityLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeyActivityLogPayload>[]
          }
          delete: {
            args: Prisma.KeyActivityLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeyActivityLogPayload>
          }
          update: {
            args: Prisma.KeyActivityLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeyActivityLogPayload>
          }
          deleteMany: {
            args: Prisma.KeyActivityLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.KeyActivityLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.KeyActivityLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeyActivityLogPayload>[]
          }
          upsert: {
            args: Prisma.KeyActivityLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeyActivityLogPayload>
          }
          aggregate: {
            args: Prisma.KeyActivityLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateKeyActivityLog>
          }
          groupBy: {
            args: Prisma.KeyActivityLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<KeyActivityLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.KeyActivityLogCountArgs<ExtArgs>
            result: $Utils.Optional<KeyActivityLogCountAggregateOutputType> | number
          }
        }
      }
      UserProfileExt: {
        payload: Prisma.$UserProfileExtPayload<ExtArgs>
        fields: Prisma.UserProfileExtFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserProfileExtFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfileExtPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserProfileExtFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfileExtPayload>
          }
          findFirst: {
            args: Prisma.UserProfileExtFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfileExtPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserProfileExtFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfileExtPayload>
          }
          findMany: {
            args: Prisma.UserProfileExtFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfileExtPayload>[]
          }
          create: {
            args: Prisma.UserProfileExtCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfileExtPayload>
          }
          createMany: {
            args: Prisma.UserProfileExtCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserProfileExtCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfileExtPayload>[]
          }
          delete: {
            args: Prisma.UserProfileExtDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfileExtPayload>
          }
          update: {
            args: Prisma.UserProfileExtUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfileExtPayload>
          }
          deleteMany: {
            args: Prisma.UserProfileExtDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserProfileExtUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserProfileExtUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfileExtPayload>[]
          }
          upsert: {
            args: Prisma.UserProfileExtUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfileExtPayload>
          }
          aggregate: {
            args: Prisma.UserProfileExtAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserProfileExt>
          }
          groupBy: {
            args: Prisma.UserProfileExtGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserProfileExtGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserProfileExtCountArgs<ExtArgs>
            result: $Utils.Optional<UserProfileExtCountAggregateOutputType> | number
          }
        }
      }
      ThemePreference: {
        payload: Prisma.$ThemePreferencePayload<ExtArgs>
        fields: Prisma.ThemePreferenceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ThemePreferenceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThemePreferencePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ThemePreferenceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThemePreferencePayload>
          }
          findFirst: {
            args: Prisma.ThemePreferenceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThemePreferencePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ThemePreferenceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThemePreferencePayload>
          }
          findMany: {
            args: Prisma.ThemePreferenceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThemePreferencePayload>[]
          }
          create: {
            args: Prisma.ThemePreferenceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThemePreferencePayload>
          }
          createMany: {
            args: Prisma.ThemePreferenceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ThemePreferenceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThemePreferencePayload>[]
          }
          delete: {
            args: Prisma.ThemePreferenceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThemePreferencePayload>
          }
          update: {
            args: Prisma.ThemePreferenceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThemePreferencePayload>
          }
          deleteMany: {
            args: Prisma.ThemePreferenceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ThemePreferenceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ThemePreferenceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThemePreferencePayload>[]
          }
          upsert: {
            args: Prisma.ThemePreferenceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThemePreferencePayload>
          }
          aggregate: {
            args: Prisma.ThemePreferenceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateThemePreference>
          }
          groupBy: {
            args: Prisma.ThemePreferenceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ThemePreferenceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ThemePreferenceCountArgs<ExtArgs>
            result: $Utils.Optional<ThemePreferenceCountAggregateOutputType> | number
          }
        }
      }
      SecurityIncident: {
        payload: Prisma.$SecurityIncidentPayload<ExtArgs>
        fields: Prisma.SecurityIncidentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SecurityIncidentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityIncidentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SecurityIncidentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityIncidentPayload>
          }
          findFirst: {
            args: Prisma.SecurityIncidentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityIncidentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SecurityIncidentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityIncidentPayload>
          }
          findMany: {
            args: Prisma.SecurityIncidentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityIncidentPayload>[]
          }
          create: {
            args: Prisma.SecurityIncidentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityIncidentPayload>
          }
          createMany: {
            args: Prisma.SecurityIncidentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SecurityIncidentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityIncidentPayload>[]
          }
          delete: {
            args: Prisma.SecurityIncidentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityIncidentPayload>
          }
          update: {
            args: Prisma.SecurityIncidentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityIncidentPayload>
          }
          deleteMany: {
            args: Prisma.SecurityIncidentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SecurityIncidentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SecurityIncidentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityIncidentPayload>[]
          }
          upsert: {
            args: Prisma.SecurityIncidentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityIncidentPayload>
          }
          aggregate: {
            args: Prisma.SecurityIncidentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSecurityIncident>
          }
          groupBy: {
            args: Prisma.SecurityIncidentGroupByArgs<ExtArgs>
            result: $Utils.Optional<SecurityIncidentGroupByOutputType>[]
          }
          count: {
            args: Prisma.SecurityIncidentCountArgs<ExtArgs>
            result: $Utils.Optional<SecurityIncidentCountAggregateOutputType> | number
          }
        }
      }
      SecurityAuditLog: {
        payload: Prisma.$SecurityAuditLogPayload<ExtArgs>
        fields: Prisma.SecurityAuditLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SecurityAuditLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityAuditLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SecurityAuditLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityAuditLogPayload>
          }
          findFirst: {
            args: Prisma.SecurityAuditLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityAuditLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SecurityAuditLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityAuditLogPayload>
          }
          findMany: {
            args: Prisma.SecurityAuditLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityAuditLogPayload>[]
          }
          create: {
            args: Prisma.SecurityAuditLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityAuditLogPayload>
          }
          createMany: {
            args: Prisma.SecurityAuditLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SecurityAuditLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityAuditLogPayload>[]
          }
          delete: {
            args: Prisma.SecurityAuditLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityAuditLogPayload>
          }
          update: {
            args: Prisma.SecurityAuditLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityAuditLogPayload>
          }
          deleteMany: {
            args: Prisma.SecurityAuditLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SecurityAuditLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SecurityAuditLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityAuditLogPayload>[]
          }
          upsert: {
            args: Prisma.SecurityAuditLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityAuditLogPayload>
          }
          aggregate: {
            args: Prisma.SecurityAuditLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSecurityAuditLog>
          }
          groupBy: {
            args: Prisma.SecurityAuditLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<SecurityAuditLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.SecurityAuditLogCountArgs<ExtArgs>
            result: $Utils.Optional<SecurityAuditLogCountAggregateOutputType> | number
          }
        }
      }
      CompanyProfile: {
        payload: Prisma.$CompanyProfilePayload<ExtArgs>
        fields: Prisma.CompanyProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompanyProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompanyProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyProfilePayload>
          }
          findFirst: {
            args: Prisma.CompanyProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompanyProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyProfilePayload>
          }
          findMany: {
            args: Prisma.CompanyProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyProfilePayload>[]
          }
          create: {
            args: Prisma.CompanyProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyProfilePayload>
          }
          createMany: {
            args: Prisma.CompanyProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CompanyProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyProfilePayload>[]
          }
          delete: {
            args: Prisma.CompanyProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyProfilePayload>
          }
          update: {
            args: Prisma.CompanyProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyProfilePayload>
          }
          deleteMany: {
            args: Prisma.CompanyProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompanyProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CompanyProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyProfilePayload>[]
          }
          upsert: {
            args: Prisma.CompanyProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyProfilePayload>
          }
          aggregate: {
            args: Prisma.CompanyProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompanyProfile>
          }
          groupBy: {
            args: Prisma.CompanyProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompanyProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompanyProfileCountArgs<ExtArgs>
            result: $Utils.Optional<CompanyProfileCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    role?: RoleOmit
    team?: TeamOmit
    activeSession?: ActiveSessionOmit
    apiKey?: ApiKeyOmit
    keyActivityLog?: KeyActivityLogOmit
    userProfileExt?: UserProfileExtOmit
    themePreference?: ThemePreferenceOmit
    securityIncident?: SecurityIncidentOmit
    securityAuditLog?: SecurityAuditLogOmit
    companyProfile?: CompanyProfileOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    apiKeys: number
    sessions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    apiKeys?: boolean | UserCountOutputTypeCountApiKeysArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountApiKeysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApiKeyWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActiveSessionWhereInput
  }


  /**
   * Count Type RoleCountOutputType
   */

  export type RoleCountOutputType = {
    users: number
  }

  export type RoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | RoleCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleCountOutputType
     */
    select?: RoleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type TeamCountOutputType
   */

  export type TeamCountOutputType = {
    users: number
  }

  export type TeamCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | TeamCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamCountOutputType
     */
    select?: TeamCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type ApiKeyCountOutputType
   */

  export type ApiKeyCountOutputType = {
    activityLogs: number
  }

  export type ApiKeyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activityLogs?: boolean | ApiKeyCountOutputTypeCountActivityLogsArgs
  }

  // Custom InputTypes
  /**
   * ApiKeyCountOutputType without action
   */
  export type ApiKeyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKeyCountOutputType
     */
    select?: ApiKeyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ApiKeyCountOutputType without action
   */
  export type ApiKeyCountOutputTypeCountActivityLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KeyActivityLogWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    passwordHash: string | null
    roleId: string | null
    teamId: string | null
    status: $Enums.UserStatus | null
    joinedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    passwordHash: string | null
    roleId: string | null
    teamId: string | null
    status: $Enums.UserStatus | null
    joinedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    passwordHash: number
    roleId: number
    teamId: number
    status: number
    joinedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    passwordHash?: true
    roleId?: true
    teamId?: true
    status?: true
    joinedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    passwordHash?: true
    roleId?: true
    teamId?: true
    status?: true
    joinedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    passwordHash?: true
    roleId?: true
    teamId?: true
    status?: true
    joinedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    name: string
    passwordHash: string
    roleId: string | null
    teamId: string | null
    status: $Enums.UserStatus
    joinedAt: Date
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    passwordHash?: boolean
    roleId?: boolean
    teamId?: boolean
    status?: boolean
    joinedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean | User$roleArgs<ExtArgs>
    team?: boolean | User$teamArgs<ExtArgs>
    apiKeys?: boolean | User$apiKeysArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    profileExt?: boolean | User$profileExtArgs<ExtArgs>
    themePrefs?: boolean | User$themePrefsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    passwordHash?: boolean
    roleId?: boolean
    teamId?: boolean
    status?: boolean
    joinedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean | User$roleArgs<ExtArgs>
    team?: boolean | User$teamArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    passwordHash?: boolean
    roleId?: boolean
    teamId?: boolean
    status?: boolean
    joinedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean | User$roleArgs<ExtArgs>
    team?: boolean | User$teamArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    passwordHash?: boolean
    roleId?: boolean
    teamId?: boolean
    status?: boolean
    joinedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "passwordHash" | "roleId" | "teamId" | "status" | "joinedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | User$roleArgs<ExtArgs>
    team?: boolean | User$teamArgs<ExtArgs>
    apiKeys?: boolean | User$apiKeysArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    profileExt?: boolean | User$profileExtArgs<ExtArgs>
    themePrefs?: boolean | User$themePrefsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | User$roleArgs<ExtArgs>
    team?: boolean | User$teamArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | User$roleArgs<ExtArgs>
    team?: boolean | User$teamArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      role: Prisma.$RolePayload<ExtArgs> | null
      team: Prisma.$TeamPayload<ExtArgs> | null
      apiKeys: Prisma.$ApiKeyPayload<ExtArgs>[]
      sessions: Prisma.$ActiveSessionPayload<ExtArgs>[]
      profileExt: Prisma.$UserProfileExtPayload<ExtArgs> | null
      themePrefs: Prisma.$ThemePreferencePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string
      passwordHash: string
      roleId: string | null
      teamId: string | null
      status: $Enums.UserStatus
      joinedAt: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    role<T extends User$roleArgs<ExtArgs> = {}>(args?: Subset<T, User$roleArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    team<T extends User$teamArgs<ExtArgs> = {}>(args?: Subset<T, User$teamArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    apiKeys<T extends User$apiKeysArgs<ExtArgs> = {}>(args?: Subset<T, User$apiKeysArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActiveSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    profileExt<T extends User$profileExtArgs<ExtArgs> = {}>(args?: Subset<T, User$profileExtArgs<ExtArgs>>): Prisma__UserProfileExtClient<$Result.GetResult<Prisma.$UserProfileExtPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    themePrefs<T extends User$themePrefsArgs<ExtArgs> = {}>(args?: Subset<T, User$themePrefsArgs<ExtArgs>>): Prisma__ThemePreferenceClient<$Result.GetResult<Prisma.$ThemePreferencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly roleId: FieldRef<"User", 'String'>
    readonly teamId: FieldRef<"User", 'String'>
    readonly status: FieldRef<"User", 'UserStatus'>
    readonly joinedAt: FieldRef<"User", 'DateTime'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.role
   */
  export type User$roleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    where?: RoleWhereInput
  }

  /**
   * User.team
   */
  export type User$teamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    where?: TeamWhereInput
  }

  /**
   * User.apiKeys
   */
  export type User$apiKeysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    where?: ApiKeyWhereInput
    orderBy?: ApiKeyOrderByWithRelationInput | ApiKeyOrderByWithRelationInput[]
    cursor?: ApiKeyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApiKeyScalarFieldEnum | ApiKeyScalarFieldEnum[]
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActiveSession
     */
    select?: ActiveSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActiveSession
     */
    omit?: ActiveSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActiveSessionInclude<ExtArgs> | null
    where?: ActiveSessionWhereInput
    orderBy?: ActiveSessionOrderByWithRelationInput | ActiveSessionOrderByWithRelationInput[]
    cursor?: ActiveSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActiveSessionScalarFieldEnum | ActiveSessionScalarFieldEnum[]
  }

  /**
   * User.profileExt
   */
  export type User$profileExtArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfileExt
     */
    select?: UserProfileExtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfileExt
     */
    omit?: UserProfileExtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileExtInclude<ExtArgs> | null
    where?: UserProfileExtWhereInput
  }

  /**
   * User.themePrefs
   */
  export type User$themePrefsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ThemePreference
     */
    select?: ThemePreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ThemePreference
     */
    omit?: ThemePreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThemePreferenceInclude<ExtArgs> | null
    where?: ThemePreferenceWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Role
   */

  export type AggregateRole = {
    _count: RoleCountAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  export type RoleMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
  }

  export type RoleMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
  }

  export type RoleCountAggregateOutputType = {
    id: number
    name: number
    description: number
    permissions: number
    modulesAccess: number
    createdAt: number
    _all: number
  }


  export type RoleMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
  }

  export type RoleMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
  }

  export type RoleCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    permissions?: true
    modulesAccess?: true
    createdAt?: true
    _all?: true
  }

  export type RoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Role to aggregate.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Roles
    **/
    _count?: true | RoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoleMaxAggregateInputType
  }

  export type GetRoleAggregateType<T extends RoleAggregateArgs> = {
        [P in keyof T & keyof AggregateRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole[P]>
      : GetScalarType<T[P], AggregateRole[P]>
  }




  export type RoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithAggregationInput | RoleOrderByWithAggregationInput[]
    by: RoleScalarFieldEnum[] | RoleScalarFieldEnum
    having?: RoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoleCountAggregateInputType | true
    _min?: RoleMinAggregateInputType
    _max?: RoleMaxAggregateInputType
  }

  export type RoleGroupByOutputType = {
    id: string
    name: string
    description: string | null
    permissions: JsonValue
    modulesAccess: JsonValue
    createdAt: Date
    _count: RoleCountAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  type GetRoleGroupByPayload<T extends RoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoleGroupByOutputType[P]>
            : GetScalarType<T[P], RoleGroupByOutputType[P]>
        }
      >
    >


  export type RoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    permissions?: boolean
    modulesAccess?: boolean
    createdAt?: boolean
    users?: boolean | Role$usersArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["role"]>

  export type RoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    permissions?: boolean
    modulesAccess?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["role"]>

  export type RoleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    permissions?: boolean
    modulesAccess?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["role"]>

  export type RoleSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    permissions?: boolean
    modulesAccess?: boolean
    createdAt?: boolean
  }

  export type RoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "permissions" | "modulesAccess" | "createdAt", ExtArgs["result"]["role"]>
  export type RoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Role$usersArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RoleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Role"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      permissions: Prisma.JsonValue
      modulesAccess: Prisma.JsonValue
      createdAt: Date
    }, ExtArgs["result"]["role"]>
    composites: {}
  }

  type RoleGetPayload<S extends boolean | null | undefined | RoleDefaultArgs> = $Result.GetResult<Prisma.$RolePayload, S>

  type RoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoleCountAggregateInputType | true
    }

  export interface RoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Role'], meta: { name: 'Role' } }
    /**
     * Find zero or one Role that matches the filter.
     * @param {RoleFindUniqueArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoleFindUniqueArgs>(args: SelectSubset<T, RoleFindUniqueArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Role that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoleFindUniqueOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoleFindUniqueOrThrowArgs>(args: SelectSubset<T, RoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoleFindFirstArgs>(args?: SelectSubset<T, RoleFindFirstArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoleFindFirstOrThrowArgs>(args?: SelectSubset<T, RoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.role.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.role.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roleWithIdOnly = await prisma.role.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoleFindManyArgs>(args?: SelectSubset<T, RoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Role.
     * @param {RoleCreateArgs} args - Arguments to create a Role.
     * @example
     * // Create one Role
     * const Role = await prisma.role.create({
     *   data: {
     *     // ... data to create a Role
     *   }
     * })
     * 
     */
    create<T extends RoleCreateArgs>(args: SelectSubset<T, RoleCreateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Roles.
     * @param {RoleCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoleCreateManyArgs>(args?: SelectSubset<T, RoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Roles and returns the data saved in the database.
     * @param {RoleCreateManyAndReturnArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Roles and only return the `id`
     * const roleWithIdOnly = await prisma.role.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoleCreateManyAndReturnArgs>(args?: SelectSubset<T, RoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Role.
     * @param {RoleDeleteArgs} args - Arguments to delete one Role.
     * @example
     * // Delete one Role
     * const Role = await prisma.role.delete({
     *   where: {
     *     // ... filter to delete one Role
     *   }
     * })
     * 
     */
    delete<T extends RoleDeleteArgs>(args: SelectSubset<T, RoleDeleteArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Role.
     * @param {RoleUpdateArgs} args - Arguments to update one Role.
     * @example
     * // Update one Role
     * const role = await prisma.role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoleUpdateArgs>(args: SelectSubset<T, RoleUpdateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Roles.
     * @param {RoleDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoleDeleteManyArgs>(args?: SelectSubset<T, RoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoleUpdateManyArgs>(args: SelectSubset<T, RoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles and returns the data updated in the database.
     * @param {RoleUpdateManyAndReturnArgs} args - Arguments to update many Roles.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Roles and only return the `id`
     * const roleWithIdOnly = await prisma.role.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RoleUpdateManyAndReturnArgs>(args: SelectSubset<T, RoleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Role.
     * @param {RoleUpsertArgs} args - Arguments to update or create a Role.
     * @example
     * // Update or create a Role
     * const role = await prisma.role.upsert({
     *   create: {
     *     // ... data to create a Role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role we want to update
     *   }
     * })
     */
    upsert<T extends RoleUpsertArgs>(args: SelectSubset<T, RoleUpsertArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.role.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends RoleCountArgs>(
      args?: Subset<T, RoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoleAggregateArgs>(args: Subset<T, RoleAggregateArgs>): Prisma.PrismaPromise<GetRoleAggregateType<T>>

    /**
     * Group by Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoleGroupByArgs['orderBy'] }
        : { orderBy?: RoleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Role model
   */
  readonly fields: RoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Role$usersArgs<ExtArgs> = {}>(args?: Subset<T, Role$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Role model
   */
  interface RoleFieldRefs {
    readonly id: FieldRef<"Role", 'String'>
    readonly name: FieldRef<"Role", 'String'>
    readonly description: FieldRef<"Role", 'String'>
    readonly permissions: FieldRef<"Role", 'Json'>
    readonly modulesAccess: FieldRef<"Role", 'Json'>
    readonly createdAt: FieldRef<"Role", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Role findUnique
   */
  export type RoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findUniqueOrThrow
   */
  export type RoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findFirst
   */
  export type RoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findFirstOrThrow
   */
  export type RoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findMany
   */
  export type RoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role create
   */
  export type RoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to create a Role.
     */
    data: XOR<RoleCreateInput, RoleUncheckedCreateInput>
  }

  /**
   * Role createMany
   */
  export type RoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role createManyAndReturn
   */
  export type RoleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role update
   */
  export type RoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to update a Role.
     */
    data: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
    /**
     * Choose, which Role to update.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role updateMany
   */
  export type RoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role updateManyAndReturn
   */
  export type RoleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role upsert
   */
  export type RoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The filter to search for the Role to update in case it exists.
     */
    where: RoleWhereUniqueInput
    /**
     * In case the Role found by the `where` argument doesn't exist, create a new Role with this data.
     */
    create: XOR<RoleCreateInput, RoleUncheckedCreateInput>
    /**
     * In case the Role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
  }

  /**
   * Role delete
   */
  export type RoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter which Role to delete.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role deleteMany
   */
  export type RoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roles to delete
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to delete.
     */
    limit?: number
  }

  /**
   * Role.users
   */
  export type Role$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Role without action
   */
  export type RoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
  }


  /**
   * Model Team
   */

  export type AggregateTeam = {
    _count: TeamCountAggregateOutputType | null
    _avg: TeamAvgAggregateOutputType | null
    _sum: TeamSumAggregateOutputType | null
    _min: TeamMinAggregateOutputType | null
    _max: TeamMaxAggregateOutputType | null
  }

  export type TeamAvgAggregateOutputType = {
    memberCount: number | null
  }

  export type TeamSumAggregateOutputType = {
    memberCount: number | null
  }

  export type TeamMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    memberCount: number | null
    leadId: string | null
    parentTeamId: string | null
    createdAt: Date | null
  }

  export type TeamMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    memberCount: number | null
    leadId: string | null
    parentTeamId: string | null
    createdAt: Date | null
  }

  export type TeamCountAggregateOutputType = {
    id: number
    name: number
    description: number
    memberCount: number
    leadId: number
    parentTeamId: number
    createdAt: number
    _all: number
  }


  export type TeamAvgAggregateInputType = {
    memberCount?: true
  }

  export type TeamSumAggregateInputType = {
    memberCount?: true
  }

  export type TeamMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    memberCount?: true
    leadId?: true
    parentTeamId?: true
    createdAt?: true
  }

  export type TeamMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    memberCount?: true
    leadId?: true
    parentTeamId?: true
    createdAt?: true
  }

  export type TeamCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    memberCount?: true
    leadId?: true
    parentTeamId?: true
    createdAt?: true
    _all?: true
  }

  export type TeamAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Team to aggregate.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Teams
    **/
    _count?: true | TeamCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TeamAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TeamSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeamMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeamMaxAggregateInputType
  }

  export type GetTeamAggregateType<T extends TeamAggregateArgs> = {
        [P in keyof T & keyof AggregateTeam]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeam[P]>
      : GetScalarType<T[P], AggregateTeam[P]>
  }




  export type TeamGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamWhereInput
    orderBy?: TeamOrderByWithAggregationInput | TeamOrderByWithAggregationInput[]
    by: TeamScalarFieldEnum[] | TeamScalarFieldEnum
    having?: TeamScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeamCountAggregateInputType | true
    _avg?: TeamAvgAggregateInputType
    _sum?: TeamSumAggregateInputType
    _min?: TeamMinAggregateInputType
    _max?: TeamMaxAggregateInputType
  }

  export type TeamGroupByOutputType = {
    id: string
    name: string
    description: string | null
    memberCount: number
    leadId: string | null
    parentTeamId: string | null
    createdAt: Date
    _count: TeamCountAggregateOutputType | null
    _avg: TeamAvgAggregateOutputType | null
    _sum: TeamSumAggregateOutputType | null
    _min: TeamMinAggregateOutputType | null
    _max: TeamMaxAggregateOutputType | null
  }

  type GetTeamGroupByPayload<T extends TeamGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeamGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeamGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeamGroupByOutputType[P]>
            : GetScalarType<T[P], TeamGroupByOutputType[P]>
        }
      >
    >


  export type TeamSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    memberCount?: boolean
    leadId?: boolean
    parentTeamId?: boolean
    createdAt?: boolean
    users?: boolean | Team$usersArgs<ExtArgs>
    _count?: boolean | TeamCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["team"]>

  export type TeamSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    memberCount?: boolean
    leadId?: boolean
    parentTeamId?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["team"]>

  export type TeamSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    memberCount?: boolean
    leadId?: boolean
    parentTeamId?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["team"]>

  export type TeamSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    memberCount?: boolean
    leadId?: boolean
    parentTeamId?: boolean
    createdAt?: boolean
  }

  export type TeamOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "memberCount" | "leadId" | "parentTeamId" | "createdAt", ExtArgs["result"]["team"]>
  export type TeamInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Team$usersArgs<ExtArgs>
    _count?: boolean | TeamCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TeamIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TeamIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TeamPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Team"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      memberCount: number
      leadId: string | null
      parentTeamId: string | null
      createdAt: Date
    }, ExtArgs["result"]["team"]>
    composites: {}
  }

  type TeamGetPayload<S extends boolean | null | undefined | TeamDefaultArgs> = $Result.GetResult<Prisma.$TeamPayload, S>

  type TeamCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeamFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeamCountAggregateInputType | true
    }

  export interface TeamDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Team'], meta: { name: 'Team' } }
    /**
     * Find zero or one Team that matches the filter.
     * @param {TeamFindUniqueArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeamFindUniqueArgs>(args: SelectSubset<T, TeamFindUniqueArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Team that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeamFindUniqueOrThrowArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeamFindUniqueOrThrowArgs>(args: SelectSubset<T, TeamFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Team that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindFirstArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeamFindFirstArgs>(args?: SelectSubset<T, TeamFindFirstArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Team that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindFirstOrThrowArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeamFindFirstOrThrowArgs>(args?: SelectSubset<T, TeamFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Teams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Teams
     * const teams = await prisma.team.findMany()
     * 
     * // Get first 10 Teams
     * const teams = await prisma.team.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teamWithIdOnly = await prisma.team.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeamFindManyArgs>(args?: SelectSubset<T, TeamFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Team.
     * @param {TeamCreateArgs} args - Arguments to create a Team.
     * @example
     * // Create one Team
     * const Team = await prisma.team.create({
     *   data: {
     *     // ... data to create a Team
     *   }
     * })
     * 
     */
    create<T extends TeamCreateArgs>(args: SelectSubset<T, TeamCreateArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Teams.
     * @param {TeamCreateManyArgs} args - Arguments to create many Teams.
     * @example
     * // Create many Teams
     * const team = await prisma.team.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeamCreateManyArgs>(args?: SelectSubset<T, TeamCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Teams and returns the data saved in the database.
     * @param {TeamCreateManyAndReturnArgs} args - Arguments to create many Teams.
     * @example
     * // Create many Teams
     * const team = await prisma.team.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Teams and only return the `id`
     * const teamWithIdOnly = await prisma.team.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TeamCreateManyAndReturnArgs>(args?: SelectSubset<T, TeamCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Team.
     * @param {TeamDeleteArgs} args - Arguments to delete one Team.
     * @example
     * // Delete one Team
     * const Team = await prisma.team.delete({
     *   where: {
     *     // ... filter to delete one Team
     *   }
     * })
     * 
     */
    delete<T extends TeamDeleteArgs>(args: SelectSubset<T, TeamDeleteArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Team.
     * @param {TeamUpdateArgs} args - Arguments to update one Team.
     * @example
     * // Update one Team
     * const team = await prisma.team.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeamUpdateArgs>(args: SelectSubset<T, TeamUpdateArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Teams.
     * @param {TeamDeleteManyArgs} args - Arguments to filter Teams to delete.
     * @example
     * // Delete a few Teams
     * const { count } = await prisma.team.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeamDeleteManyArgs>(args?: SelectSubset<T, TeamDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Teams
     * const team = await prisma.team.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeamUpdateManyArgs>(args: SelectSubset<T, TeamUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teams and returns the data updated in the database.
     * @param {TeamUpdateManyAndReturnArgs} args - Arguments to update many Teams.
     * @example
     * // Update many Teams
     * const team = await prisma.team.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Teams and only return the `id`
     * const teamWithIdOnly = await prisma.team.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TeamUpdateManyAndReturnArgs>(args: SelectSubset<T, TeamUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Team.
     * @param {TeamUpsertArgs} args - Arguments to update or create a Team.
     * @example
     * // Update or create a Team
     * const team = await prisma.team.upsert({
     *   create: {
     *     // ... data to create a Team
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Team we want to update
     *   }
     * })
     */
    upsert<T extends TeamUpsertArgs>(args: SelectSubset<T, TeamUpsertArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamCountArgs} args - Arguments to filter Teams to count.
     * @example
     * // Count the number of Teams
     * const count = await prisma.team.count({
     *   where: {
     *     // ... the filter for the Teams we want to count
     *   }
     * })
    **/
    count<T extends TeamCountArgs>(
      args?: Subset<T, TeamCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeamCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Team.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TeamAggregateArgs>(args: Subset<T, TeamAggregateArgs>): Prisma.PrismaPromise<GetTeamAggregateType<T>>

    /**
     * Group by Team.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TeamGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeamGroupByArgs['orderBy'] }
        : { orderBy?: TeamGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TeamGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeamGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Team model
   */
  readonly fields: TeamFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Team.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeamClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Team$usersArgs<ExtArgs> = {}>(args?: Subset<T, Team$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Team model
   */
  interface TeamFieldRefs {
    readonly id: FieldRef<"Team", 'String'>
    readonly name: FieldRef<"Team", 'String'>
    readonly description: FieldRef<"Team", 'String'>
    readonly memberCount: FieldRef<"Team", 'Int'>
    readonly leadId: FieldRef<"Team", 'String'>
    readonly parentTeamId: FieldRef<"Team", 'String'>
    readonly createdAt: FieldRef<"Team", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Team findUnique
   */
  export type TeamFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team findUniqueOrThrow
   */
  export type TeamFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team findFirst
   */
  export type TeamFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teams.
     */
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Team findFirstOrThrow
   */
  export type TeamFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teams.
     */
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Team findMany
   */
  export type TeamFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Teams to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Team create
   */
  export type TeamCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * The data needed to create a Team.
     */
    data: XOR<TeamCreateInput, TeamUncheckedCreateInput>
  }

  /**
   * Team createMany
   */
  export type TeamCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Teams.
     */
    data: TeamCreateManyInput | TeamCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Team createManyAndReturn
   */
  export type TeamCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * The data used to create many Teams.
     */
    data: TeamCreateManyInput | TeamCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Team update
   */
  export type TeamUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * The data needed to update a Team.
     */
    data: XOR<TeamUpdateInput, TeamUncheckedUpdateInput>
    /**
     * Choose, which Team to update.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team updateMany
   */
  export type TeamUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Teams.
     */
    data: XOR<TeamUpdateManyMutationInput, TeamUncheckedUpdateManyInput>
    /**
     * Filter which Teams to update
     */
    where?: TeamWhereInput
    /**
     * Limit how many Teams to update.
     */
    limit?: number
  }

  /**
   * Team updateManyAndReturn
   */
  export type TeamUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * The data used to update Teams.
     */
    data: XOR<TeamUpdateManyMutationInput, TeamUncheckedUpdateManyInput>
    /**
     * Filter which Teams to update
     */
    where?: TeamWhereInput
    /**
     * Limit how many Teams to update.
     */
    limit?: number
  }

  /**
   * Team upsert
   */
  export type TeamUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * The filter to search for the Team to update in case it exists.
     */
    where: TeamWhereUniqueInput
    /**
     * In case the Team found by the `where` argument doesn't exist, create a new Team with this data.
     */
    create: XOR<TeamCreateInput, TeamUncheckedCreateInput>
    /**
     * In case the Team was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeamUpdateInput, TeamUncheckedUpdateInput>
  }

  /**
   * Team delete
   */
  export type TeamDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter which Team to delete.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team deleteMany
   */
  export type TeamDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Teams to delete
     */
    where?: TeamWhereInput
    /**
     * Limit how many Teams to delete.
     */
    limit?: number
  }

  /**
   * Team.users
   */
  export type Team$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Team without action
   */
  export type TeamDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
  }


  /**
   * Model ActiveSession
   */

  export type AggregateActiveSession = {
    _count: ActiveSessionCountAggregateOutputType | null
    _min: ActiveSessionMinAggregateOutputType | null
    _max: ActiveSessionMaxAggregateOutputType | null
  }

  export type ActiveSessionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    device: string | null
    location: string | null
    ip: string | null
    tokenHash: string | null
    status: $Enums.SessionStatus | null
    loginTime: Date | null
    expiresAt: Date | null
  }

  export type ActiveSessionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    device: string | null
    location: string | null
    ip: string | null
    tokenHash: string | null
    status: $Enums.SessionStatus | null
    loginTime: Date | null
    expiresAt: Date | null
  }

  export type ActiveSessionCountAggregateOutputType = {
    id: number
    userId: number
    device: number
    location: number
    ip: number
    tokenHash: number
    status: number
    loginTime: number
    expiresAt: number
    _all: number
  }


  export type ActiveSessionMinAggregateInputType = {
    id?: true
    userId?: true
    device?: true
    location?: true
    ip?: true
    tokenHash?: true
    status?: true
    loginTime?: true
    expiresAt?: true
  }

  export type ActiveSessionMaxAggregateInputType = {
    id?: true
    userId?: true
    device?: true
    location?: true
    ip?: true
    tokenHash?: true
    status?: true
    loginTime?: true
    expiresAt?: true
  }

  export type ActiveSessionCountAggregateInputType = {
    id?: true
    userId?: true
    device?: true
    location?: true
    ip?: true
    tokenHash?: true
    status?: true
    loginTime?: true
    expiresAt?: true
    _all?: true
  }

  export type ActiveSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActiveSession to aggregate.
     */
    where?: ActiveSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActiveSessions to fetch.
     */
    orderBy?: ActiveSessionOrderByWithRelationInput | ActiveSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActiveSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActiveSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActiveSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ActiveSessions
    **/
    _count?: true | ActiveSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActiveSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActiveSessionMaxAggregateInputType
  }

  export type GetActiveSessionAggregateType<T extends ActiveSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateActiveSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActiveSession[P]>
      : GetScalarType<T[P], AggregateActiveSession[P]>
  }




  export type ActiveSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActiveSessionWhereInput
    orderBy?: ActiveSessionOrderByWithAggregationInput | ActiveSessionOrderByWithAggregationInput[]
    by: ActiveSessionScalarFieldEnum[] | ActiveSessionScalarFieldEnum
    having?: ActiveSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActiveSessionCountAggregateInputType | true
    _min?: ActiveSessionMinAggregateInputType
    _max?: ActiveSessionMaxAggregateInputType
  }

  export type ActiveSessionGroupByOutputType = {
    id: string
    userId: string
    device: string | null
    location: string | null
    ip: string | null
    tokenHash: string
    status: $Enums.SessionStatus
    loginTime: Date
    expiresAt: Date
    _count: ActiveSessionCountAggregateOutputType | null
    _min: ActiveSessionMinAggregateOutputType | null
    _max: ActiveSessionMaxAggregateOutputType | null
  }

  type GetActiveSessionGroupByPayload<T extends ActiveSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActiveSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActiveSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActiveSessionGroupByOutputType[P]>
            : GetScalarType<T[P], ActiveSessionGroupByOutputType[P]>
        }
      >
    >


  export type ActiveSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    device?: boolean
    location?: boolean
    ip?: boolean
    tokenHash?: boolean
    status?: boolean
    loginTime?: boolean
    expiresAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activeSession"]>

  export type ActiveSessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    device?: boolean
    location?: boolean
    ip?: boolean
    tokenHash?: boolean
    status?: boolean
    loginTime?: boolean
    expiresAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activeSession"]>

  export type ActiveSessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    device?: boolean
    location?: boolean
    ip?: boolean
    tokenHash?: boolean
    status?: boolean
    loginTime?: boolean
    expiresAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activeSession"]>

  export type ActiveSessionSelectScalar = {
    id?: boolean
    userId?: boolean
    device?: boolean
    location?: boolean
    ip?: boolean
    tokenHash?: boolean
    status?: boolean
    loginTime?: boolean
    expiresAt?: boolean
  }

  export type ActiveSessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "device" | "location" | "ip" | "tokenHash" | "status" | "loginTime" | "expiresAt", ExtArgs["result"]["activeSession"]>
  export type ActiveSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ActiveSessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ActiveSessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ActiveSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ActiveSession"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      device: string | null
      location: string | null
      ip: string | null
      tokenHash: string
      status: $Enums.SessionStatus
      loginTime: Date
      expiresAt: Date
    }, ExtArgs["result"]["activeSession"]>
    composites: {}
  }

  type ActiveSessionGetPayload<S extends boolean | null | undefined | ActiveSessionDefaultArgs> = $Result.GetResult<Prisma.$ActiveSessionPayload, S>

  type ActiveSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ActiveSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ActiveSessionCountAggregateInputType | true
    }

  export interface ActiveSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ActiveSession'], meta: { name: 'ActiveSession' } }
    /**
     * Find zero or one ActiveSession that matches the filter.
     * @param {ActiveSessionFindUniqueArgs} args - Arguments to find a ActiveSession
     * @example
     * // Get one ActiveSession
     * const activeSession = await prisma.activeSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ActiveSessionFindUniqueArgs>(args: SelectSubset<T, ActiveSessionFindUniqueArgs<ExtArgs>>): Prisma__ActiveSessionClient<$Result.GetResult<Prisma.$ActiveSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ActiveSession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ActiveSessionFindUniqueOrThrowArgs} args - Arguments to find a ActiveSession
     * @example
     * // Get one ActiveSession
     * const activeSession = await prisma.activeSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ActiveSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, ActiveSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ActiveSessionClient<$Result.GetResult<Prisma.$ActiveSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ActiveSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActiveSessionFindFirstArgs} args - Arguments to find a ActiveSession
     * @example
     * // Get one ActiveSession
     * const activeSession = await prisma.activeSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ActiveSessionFindFirstArgs>(args?: SelectSubset<T, ActiveSessionFindFirstArgs<ExtArgs>>): Prisma__ActiveSessionClient<$Result.GetResult<Prisma.$ActiveSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ActiveSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActiveSessionFindFirstOrThrowArgs} args - Arguments to find a ActiveSession
     * @example
     * // Get one ActiveSession
     * const activeSession = await prisma.activeSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ActiveSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, ActiveSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ActiveSessionClient<$Result.GetResult<Prisma.$ActiveSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ActiveSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActiveSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ActiveSessions
     * const activeSessions = await prisma.activeSession.findMany()
     * 
     * // Get first 10 ActiveSessions
     * const activeSessions = await prisma.activeSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const activeSessionWithIdOnly = await prisma.activeSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ActiveSessionFindManyArgs>(args?: SelectSubset<T, ActiveSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActiveSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ActiveSession.
     * @param {ActiveSessionCreateArgs} args - Arguments to create a ActiveSession.
     * @example
     * // Create one ActiveSession
     * const ActiveSession = await prisma.activeSession.create({
     *   data: {
     *     // ... data to create a ActiveSession
     *   }
     * })
     * 
     */
    create<T extends ActiveSessionCreateArgs>(args: SelectSubset<T, ActiveSessionCreateArgs<ExtArgs>>): Prisma__ActiveSessionClient<$Result.GetResult<Prisma.$ActiveSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ActiveSessions.
     * @param {ActiveSessionCreateManyArgs} args - Arguments to create many ActiveSessions.
     * @example
     * // Create many ActiveSessions
     * const activeSession = await prisma.activeSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ActiveSessionCreateManyArgs>(args?: SelectSubset<T, ActiveSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ActiveSessions and returns the data saved in the database.
     * @param {ActiveSessionCreateManyAndReturnArgs} args - Arguments to create many ActiveSessions.
     * @example
     * // Create many ActiveSessions
     * const activeSession = await prisma.activeSession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ActiveSessions and only return the `id`
     * const activeSessionWithIdOnly = await prisma.activeSession.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ActiveSessionCreateManyAndReturnArgs>(args?: SelectSubset<T, ActiveSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActiveSessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ActiveSession.
     * @param {ActiveSessionDeleteArgs} args - Arguments to delete one ActiveSession.
     * @example
     * // Delete one ActiveSession
     * const ActiveSession = await prisma.activeSession.delete({
     *   where: {
     *     // ... filter to delete one ActiveSession
     *   }
     * })
     * 
     */
    delete<T extends ActiveSessionDeleteArgs>(args: SelectSubset<T, ActiveSessionDeleteArgs<ExtArgs>>): Prisma__ActiveSessionClient<$Result.GetResult<Prisma.$ActiveSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ActiveSession.
     * @param {ActiveSessionUpdateArgs} args - Arguments to update one ActiveSession.
     * @example
     * // Update one ActiveSession
     * const activeSession = await prisma.activeSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ActiveSessionUpdateArgs>(args: SelectSubset<T, ActiveSessionUpdateArgs<ExtArgs>>): Prisma__ActiveSessionClient<$Result.GetResult<Prisma.$ActiveSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ActiveSessions.
     * @param {ActiveSessionDeleteManyArgs} args - Arguments to filter ActiveSessions to delete.
     * @example
     * // Delete a few ActiveSessions
     * const { count } = await prisma.activeSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ActiveSessionDeleteManyArgs>(args?: SelectSubset<T, ActiveSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ActiveSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActiveSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ActiveSessions
     * const activeSession = await prisma.activeSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ActiveSessionUpdateManyArgs>(args: SelectSubset<T, ActiveSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ActiveSessions and returns the data updated in the database.
     * @param {ActiveSessionUpdateManyAndReturnArgs} args - Arguments to update many ActiveSessions.
     * @example
     * // Update many ActiveSessions
     * const activeSession = await prisma.activeSession.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ActiveSessions and only return the `id`
     * const activeSessionWithIdOnly = await prisma.activeSession.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ActiveSessionUpdateManyAndReturnArgs>(args: SelectSubset<T, ActiveSessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActiveSessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ActiveSession.
     * @param {ActiveSessionUpsertArgs} args - Arguments to update or create a ActiveSession.
     * @example
     * // Update or create a ActiveSession
     * const activeSession = await prisma.activeSession.upsert({
     *   create: {
     *     // ... data to create a ActiveSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ActiveSession we want to update
     *   }
     * })
     */
    upsert<T extends ActiveSessionUpsertArgs>(args: SelectSubset<T, ActiveSessionUpsertArgs<ExtArgs>>): Prisma__ActiveSessionClient<$Result.GetResult<Prisma.$ActiveSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ActiveSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActiveSessionCountArgs} args - Arguments to filter ActiveSessions to count.
     * @example
     * // Count the number of ActiveSessions
     * const count = await prisma.activeSession.count({
     *   where: {
     *     // ... the filter for the ActiveSessions we want to count
     *   }
     * })
    **/
    count<T extends ActiveSessionCountArgs>(
      args?: Subset<T, ActiveSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActiveSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ActiveSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActiveSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ActiveSessionAggregateArgs>(args: Subset<T, ActiveSessionAggregateArgs>): Prisma.PrismaPromise<GetActiveSessionAggregateType<T>>

    /**
     * Group by ActiveSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActiveSessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ActiveSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActiveSessionGroupByArgs['orderBy'] }
        : { orderBy?: ActiveSessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ActiveSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActiveSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ActiveSession model
   */
  readonly fields: ActiveSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ActiveSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActiveSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ActiveSession model
   */
  interface ActiveSessionFieldRefs {
    readonly id: FieldRef<"ActiveSession", 'String'>
    readonly userId: FieldRef<"ActiveSession", 'String'>
    readonly device: FieldRef<"ActiveSession", 'String'>
    readonly location: FieldRef<"ActiveSession", 'String'>
    readonly ip: FieldRef<"ActiveSession", 'String'>
    readonly tokenHash: FieldRef<"ActiveSession", 'String'>
    readonly status: FieldRef<"ActiveSession", 'SessionStatus'>
    readonly loginTime: FieldRef<"ActiveSession", 'DateTime'>
    readonly expiresAt: FieldRef<"ActiveSession", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ActiveSession findUnique
   */
  export type ActiveSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActiveSession
     */
    select?: ActiveSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActiveSession
     */
    omit?: ActiveSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActiveSessionInclude<ExtArgs> | null
    /**
     * Filter, which ActiveSession to fetch.
     */
    where: ActiveSessionWhereUniqueInput
  }

  /**
   * ActiveSession findUniqueOrThrow
   */
  export type ActiveSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActiveSession
     */
    select?: ActiveSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActiveSession
     */
    omit?: ActiveSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActiveSessionInclude<ExtArgs> | null
    /**
     * Filter, which ActiveSession to fetch.
     */
    where: ActiveSessionWhereUniqueInput
  }

  /**
   * ActiveSession findFirst
   */
  export type ActiveSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActiveSession
     */
    select?: ActiveSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActiveSession
     */
    omit?: ActiveSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActiveSessionInclude<ExtArgs> | null
    /**
     * Filter, which ActiveSession to fetch.
     */
    where?: ActiveSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActiveSessions to fetch.
     */
    orderBy?: ActiveSessionOrderByWithRelationInput | ActiveSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActiveSessions.
     */
    cursor?: ActiveSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActiveSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActiveSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActiveSessions.
     */
    distinct?: ActiveSessionScalarFieldEnum | ActiveSessionScalarFieldEnum[]
  }

  /**
   * ActiveSession findFirstOrThrow
   */
  export type ActiveSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActiveSession
     */
    select?: ActiveSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActiveSession
     */
    omit?: ActiveSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActiveSessionInclude<ExtArgs> | null
    /**
     * Filter, which ActiveSession to fetch.
     */
    where?: ActiveSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActiveSessions to fetch.
     */
    orderBy?: ActiveSessionOrderByWithRelationInput | ActiveSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActiveSessions.
     */
    cursor?: ActiveSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActiveSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActiveSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActiveSessions.
     */
    distinct?: ActiveSessionScalarFieldEnum | ActiveSessionScalarFieldEnum[]
  }

  /**
   * ActiveSession findMany
   */
  export type ActiveSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActiveSession
     */
    select?: ActiveSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActiveSession
     */
    omit?: ActiveSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActiveSessionInclude<ExtArgs> | null
    /**
     * Filter, which ActiveSessions to fetch.
     */
    where?: ActiveSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActiveSessions to fetch.
     */
    orderBy?: ActiveSessionOrderByWithRelationInput | ActiveSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ActiveSessions.
     */
    cursor?: ActiveSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActiveSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActiveSessions.
     */
    skip?: number
    distinct?: ActiveSessionScalarFieldEnum | ActiveSessionScalarFieldEnum[]
  }

  /**
   * ActiveSession create
   */
  export type ActiveSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActiveSession
     */
    select?: ActiveSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActiveSession
     */
    omit?: ActiveSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActiveSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a ActiveSession.
     */
    data: XOR<ActiveSessionCreateInput, ActiveSessionUncheckedCreateInput>
  }

  /**
   * ActiveSession createMany
   */
  export type ActiveSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ActiveSessions.
     */
    data: ActiveSessionCreateManyInput | ActiveSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ActiveSession createManyAndReturn
   */
  export type ActiveSessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActiveSession
     */
    select?: ActiveSessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ActiveSession
     */
    omit?: ActiveSessionOmit<ExtArgs> | null
    /**
     * The data used to create many ActiveSessions.
     */
    data: ActiveSessionCreateManyInput | ActiveSessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActiveSessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ActiveSession update
   */
  export type ActiveSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActiveSession
     */
    select?: ActiveSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActiveSession
     */
    omit?: ActiveSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActiveSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a ActiveSession.
     */
    data: XOR<ActiveSessionUpdateInput, ActiveSessionUncheckedUpdateInput>
    /**
     * Choose, which ActiveSession to update.
     */
    where: ActiveSessionWhereUniqueInput
  }

  /**
   * ActiveSession updateMany
   */
  export type ActiveSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ActiveSessions.
     */
    data: XOR<ActiveSessionUpdateManyMutationInput, ActiveSessionUncheckedUpdateManyInput>
    /**
     * Filter which ActiveSessions to update
     */
    where?: ActiveSessionWhereInput
    /**
     * Limit how many ActiveSessions to update.
     */
    limit?: number
  }

  /**
   * ActiveSession updateManyAndReturn
   */
  export type ActiveSessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActiveSession
     */
    select?: ActiveSessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ActiveSession
     */
    omit?: ActiveSessionOmit<ExtArgs> | null
    /**
     * The data used to update ActiveSessions.
     */
    data: XOR<ActiveSessionUpdateManyMutationInput, ActiveSessionUncheckedUpdateManyInput>
    /**
     * Filter which ActiveSessions to update
     */
    where?: ActiveSessionWhereInput
    /**
     * Limit how many ActiveSessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActiveSessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ActiveSession upsert
   */
  export type ActiveSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActiveSession
     */
    select?: ActiveSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActiveSession
     */
    omit?: ActiveSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActiveSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the ActiveSession to update in case it exists.
     */
    where: ActiveSessionWhereUniqueInput
    /**
     * In case the ActiveSession found by the `where` argument doesn't exist, create a new ActiveSession with this data.
     */
    create: XOR<ActiveSessionCreateInput, ActiveSessionUncheckedCreateInput>
    /**
     * In case the ActiveSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActiveSessionUpdateInput, ActiveSessionUncheckedUpdateInput>
  }

  /**
   * ActiveSession delete
   */
  export type ActiveSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActiveSession
     */
    select?: ActiveSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActiveSession
     */
    omit?: ActiveSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActiveSessionInclude<ExtArgs> | null
    /**
     * Filter which ActiveSession to delete.
     */
    where: ActiveSessionWhereUniqueInput
  }

  /**
   * ActiveSession deleteMany
   */
  export type ActiveSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActiveSessions to delete
     */
    where?: ActiveSessionWhereInput
    /**
     * Limit how many ActiveSessions to delete.
     */
    limit?: number
  }

  /**
   * ActiveSession without action
   */
  export type ActiveSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActiveSession
     */
    select?: ActiveSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActiveSession
     */
    omit?: ActiveSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActiveSessionInclude<ExtArgs> | null
  }


  /**
   * Model ApiKey
   */

  export type AggregateApiKey = {
    _count: ApiKeyCountAggregateOutputType | null
    _min: ApiKeyMinAggregateOutputType | null
    _max: ApiKeyMaxAggregateOutputType | null
  }

  export type ApiKeyMinAggregateOutputType = {
    id: string | null
    name: string | null
    keyHash: string | null
    keyIdDisplay: string | null
    scope: string | null
    ownerId: string | null
    environment: string | null
    status: $Enums.ApiKeyStatus | null
    createdDate: Date | null
    expiryDate: Date | null
    lastUsed: Date | null
  }

  export type ApiKeyMaxAggregateOutputType = {
    id: string | null
    name: string | null
    keyHash: string | null
    keyIdDisplay: string | null
    scope: string | null
    ownerId: string | null
    environment: string | null
    status: $Enums.ApiKeyStatus | null
    createdDate: Date | null
    expiryDate: Date | null
    lastUsed: Date | null
  }

  export type ApiKeyCountAggregateOutputType = {
    id: number
    name: number
    keyHash: number
    keyIdDisplay: number
    scope: number
    ownerId: number
    environment: number
    permissions: number
    status: number
    createdDate: number
    expiryDate: number
    lastUsed: number
    _all: number
  }


  export type ApiKeyMinAggregateInputType = {
    id?: true
    name?: true
    keyHash?: true
    keyIdDisplay?: true
    scope?: true
    ownerId?: true
    environment?: true
    status?: true
    createdDate?: true
    expiryDate?: true
    lastUsed?: true
  }

  export type ApiKeyMaxAggregateInputType = {
    id?: true
    name?: true
    keyHash?: true
    keyIdDisplay?: true
    scope?: true
    ownerId?: true
    environment?: true
    status?: true
    createdDate?: true
    expiryDate?: true
    lastUsed?: true
  }

  export type ApiKeyCountAggregateInputType = {
    id?: true
    name?: true
    keyHash?: true
    keyIdDisplay?: true
    scope?: true
    ownerId?: true
    environment?: true
    permissions?: true
    status?: true
    createdDate?: true
    expiryDate?: true
    lastUsed?: true
    _all?: true
  }

  export type ApiKeyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApiKey to aggregate.
     */
    where?: ApiKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiKeys to fetch.
     */
    orderBy?: ApiKeyOrderByWithRelationInput | ApiKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApiKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ApiKeys
    **/
    _count?: true | ApiKeyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApiKeyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApiKeyMaxAggregateInputType
  }

  export type GetApiKeyAggregateType<T extends ApiKeyAggregateArgs> = {
        [P in keyof T & keyof AggregateApiKey]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApiKey[P]>
      : GetScalarType<T[P], AggregateApiKey[P]>
  }




  export type ApiKeyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApiKeyWhereInput
    orderBy?: ApiKeyOrderByWithAggregationInput | ApiKeyOrderByWithAggregationInput[]
    by: ApiKeyScalarFieldEnum[] | ApiKeyScalarFieldEnum
    having?: ApiKeyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApiKeyCountAggregateInputType | true
    _min?: ApiKeyMinAggregateInputType
    _max?: ApiKeyMaxAggregateInputType
  }

  export type ApiKeyGroupByOutputType = {
    id: string
    name: string
    keyHash: string
    keyIdDisplay: string
    scope: string | null
    ownerId: string
    environment: string
    permissions: JsonValue
    status: $Enums.ApiKeyStatus
    createdDate: Date
    expiryDate: Date | null
    lastUsed: Date | null
    _count: ApiKeyCountAggregateOutputType | null
    _min: ApiKeyMinAggregateOutputType | null
    _max: ApiKeyMaxAggregateOutputType | null
  }

  type GetApiKeyGroupByPayload<T extends ApiKeyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApiKeyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApiKeyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApiKeyGroupByOutputType[P]>
            : GetScalarType<T[P], ApiKeyGroupByOutputType[P]>
        }
      >
    >


  export type ApiKeySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    keyHash?: boolean
    keyIdDisplay?: boolean
    scope?: boolean
    ownerId?: boolean
    environment?: boolean
    permissions?: boolean
    status?: boolean
    createdDate?: boolean
    expiryDate?: boolean
    lastUsed?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    activityLogs?: boolean | ApiKey$activityLogsArgs<ExtArgs>
    _count?: boolean | ApiKeyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["apiKey"]>

  export type ApiKeySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    keyHash?: boolean
    keyIdDisplay?: boolean
    scope?: boolean
    ownerId?: boolean
    environment?: boolean
    permissions?: boolean
    status?: boolean
    createdDate?: boolean
    expiryDate?: boolean
    lastUsed?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["apiKey"]>

  export type ApiKeySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    keyHash?: boolean
    keyIdDisplay?: boolean
    scope?: boolean
    ownerId?: boolean
    environment?: boolean
    permissions?: boolean
    status?: boolean
    createdDate?: boolean
    expiryDate?: boolean
    lastUsed?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["apiKey"]>

  export type ApiKeySelectScalar = {
    id?: boolean
    name?: boolean
    keyHash?: boolean
    keyIdDisplay?: boolean
    scope?: boolean
    ownerId?: boolean
    environment?: boolean
    permissions?: boolean
    status?: boolean
    createdDate?: boolean
    expiryDate?: boolean
    lastUsed?: boolean
  }

  export type ApiKeyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "keyHash" | "keyIdDisplay" | "scope" | "ownerId" | "environment" | "permissions" | "status" | "createdDate" | "expiryDate" | "lastUsed", ExtArgs["result"]["apiKey"]>
  export type ApiKeyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    activityLogs?: boolean | ApiKey$activityLogsArgs<ExtArgs>
    _count?: boolean | ApiKeyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ApiKeyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ApiKeyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ApiKeyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ApiKey"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs>
      activityLogs: Prisma.$KeyActivityLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      keyHash: string
      keyIdDisplay: string
      scope: string | null
      ownerId: string
      environment: string
      permissions: Prisma.JsonValue
      status: $Enums.ApiKeyStatus
      createdDate: Date
      expiryDate: Date | null
      lastUsed: Date | null
    }, ExtArgs["result"]["apiKey"]>
    composites: {}
  }

  type ApiKeyGetPayload<S extends boolean | null | undefined | ApiKeyDefaultArgs> = $Result.GetResult<Prisma.$ApiKeyPayload, S>

  type ApiKeyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ApiKeyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ApiKeyCountAggregateInputType | true
    }

  export interface ApiKeyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ApiKey'], meta: { name: 'ApiKey' } }
    /**
     * Find zero or one ApiKey that matches the filter.
     * @param {ApiKeyFindUniqueArgs} args - Arguments to find a ApiKey
     * @example
     * // Get one ApiKey
     * const apiKey = await prisma.apiKey.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApiKeyFindUniqueArgs>(args: SelectSubset<T, ApiKeyFindUniqueArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ApiKey that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ApiKeyFindUniqueOrThrowArgs} args - Arguments to find a ApiKey
     * @example
     * // Get one ApiKey
     * const apiKey = await prisma.apiKey.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApiKeyFindUniqueOrThrowArgs>(args: SelectSubset<T, ApiKeyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApiKey that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyFindFirstArgs} args - Arguments to find a ApiKey
     * @example
     * // Get one ApiKey
     * const apiKey = await prisma.apiKey.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApiKeyFindFirstArgs>(args?: SelectSubset<T, ApiKeyFindFirstArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApiKey that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyFindFirstOrThrowArgs} args - Arguments to find a ApiKey
     * @example
     * // Get one ApiKey
     * const apiKey = await prisma.apiKey.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApiKeyFindFirstOrThrowArgs>(args?: SelectSubset<T, ApiKeyFindFirstOrThrowArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ApiKeys that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ApiKeys
     * const apiKeys = await prisma.apiKey.findMany()
     * 
     * // Get first 10 ApiKeys
     * const apiKeys = await prisma.apiKey.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const apiKeyWithIdOnly = await prisma.apiKey.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ApiKeyFindManyArgs>(args?: SelectSubset<T, ApiKeyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ApiKey.
     * @param {ApiKeyCreateArgs} args - Arguments to create a ApiKey.
     * @example
     * // Create one ApiKey
     * const ApiKey = await prisma.apiKey.create({
     *   data: {
     *     // ... data to create a ApiKey
     *   }
     * })
     * 
     */
    create<T extends ApiKeyCreateArgs>(args: SelectSubset<T, ApiKeyCreateArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ApiKeys.
     * @param {ApiKeyCreateManyArgs} args - Arguments to create many ApiKeys.
     * @example
     * // Create many ApiKeys
     * const apiKey = await prisma.apiKey.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ApiKeyCreateManyArgs>(args?: SelectSubset<T, ApiKeyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ApiKeys and returns the data saved in the database.
     * @param {ApiKeyCreateManyAndReturnArgs} args - Arguments to create many ApiKeys.
     * @example
     * // Create many ApiKeys
     * const apiKey = await prisma.apiKey.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ApiKeys and only return the `id`
     * const apiKeyWithIdOnly = await prisma.apiKey.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ApiKeyCreateManyAndReturnArgs>(args?: SelectSubset<T, ApiKeyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ApiKey.
     * @param {ApiKeyDeleteArgs} args - Arguments to delete one ApiKey.
     * @example
     * // Delete one ApiKey
     * const ApiKey = await prisma.apiKey.delete({
     *   where: {
     *     // ... filter to delete one ApiKey
     *   }
     * })
     * 
     */
    delete<T extends ApiKeyDeleteArgs>(args: SelectSubset<T, ApiKeyDeleteArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ApiKey.
     * @param {ApiKeyUpdateArgs} args - Arguments to update one ApiKey.
     * @example
     * // Update one ApiKey
     * const apiKey = await prisma.apiKey.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ApiKeyUpdateArgs>(args: SelectSubset<T, ApiKeyUpdateArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ApiKeys.
     * @param {ApiKeyDeleteManyArgs} args - Arguments to filter ApiKeys to delete.
     * @example
     * // Delete a few ApiKeys
     * const { count } = await prisma.apiKey.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ApiKeyDeleteManyArgs>(args?: SelectSubset<T, ApiKeyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApiKeys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ApiKeys
     * const apiKey = await prisma.apiKey.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ApiKeyUpdateManyArgs>(args: SelectSubset<T, ApiKeyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApiKeys and returns the data updated in the database.
     * @param {ApiKeyUpdateManyAndReturnArgs} args - Arguments to update many ApiKeys.
     * @example
     * // Update many ApiKeys
     * const apiKey = await prisma.apiKey.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ApiKeys and only return the `id`
     * const apiKeyWithIdOnly = await prisma.apiKey.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ApiKeyUpdateManyAndReturnArgs>(args: SelectSubset<T, ApiKeyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ApiKey.
     * @param {ApiKeyUpsertArgs} args - Arguments to update or create a ApiKey.
     * @example
     * // Update or create a ApiKey
     * const apiKey = await prisma.apiKey.upsert({
     *   create: {
     *     // ... data to create a ApiKey
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ApiKey we want to update
     *   }
     * })
     */
    upsert<T extends ApiKeyUpsertArgs>(args: SelectSubset<T, ApiKeyUpsertArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ApiKeys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyCountArgs} args - Arguments to filter ApiKeys to count.
     * @example
     * // Count the number of ApiKeys
     * const count = await prisma.apiKey.count({
     *   where: {
     *     // ... the filter for the ApiKeys we want to count
     *   }
     * })
    **/
    count<T extends ApiKeyCountArgs>(
      args?: Subset<T, ApiKeyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApiKeyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ApiKey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ApiKeyAggregateArgs>(args: Subset<T, ApiKeyAggregateArgs>): Prisma.PrismaPromise<GetApiKeyAggregateType<T>>

    /**
     * Group by ApiKey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ApiKeyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApiKeyGroupByArgs['orderBy'] }
        : { orderBy?: ApiKeyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ApiKeyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApiKeyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ApiKey model
   */
  readonly fields: ApiKeyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ApiKey.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApiKeyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    activityLogs<T extends ApiKey$activityLogsArgs<ExtArgs> = {}>(args?: Subset<T, ApiKey$activityLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KeyActivityLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ApiKey model
   */
  interface ApiKeyFieldRefs {
    readonly id: FieldRef<"ApiKey", 'String'>
    readonly name: FieldRef<"ApiKey", 'String'>
    readonly keyHash: FieldRef<"ApiKey", 'String'>
    readonly keyIdDisplay: FieldRef<"ApiKey", 'String'>
    readonly scope: FieldRef<"ApiKey", 'String'>
    readonly ownerId: FieldRef<"ApiKey", 'String'>
    readonly environment: FieldRef<"ApiKey", 'String'>
    readonly permissions: FieldRef<"ApiKey", 'Json'>
    readonly status: FieldRef<"ApiKey", 'ApiKeyStatus'>
    readonly createdDate: FieldRef<"ApiKey", 'DateTime'>
    readonly expiryDate: FieldRef<"ApiKey", 'DateTime'>
    readonly lastUsed: FieldRef<"ApiKey", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ApiKey findUnique
   */
  export type ApiKeyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * Filter, which ApiKey to fetch.
     */
    where: ApiKeyWhereUniqueInput
  }

  /**
   * ApiKey findUniqueOrThrow
   */
  export type ApiKeyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * Filter, which ApiKey to fetch.
     */
    where: ApiKeyWhereUniqueInput
  }

  /**
   * ApiKey findFirst
   */
  export type ApiKeyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * Filter, which ApiKey to fetch.
     */
    where?: ApiKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiKeys to fetch.
     */
    orderBy?: ApiKeyOrderByWithRelationInput | ApiKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApiKeys.
     */
    cursor?: ApiKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApiKeys.
     */
    distinct?: ApiKeyScalarFieldEnum | ApiKeyScalarFieldEnum[]
  }

  /**
   * ApiKey findFirstOrThrow
   */
  export type ApiKeyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * Filter, which ApiKey to fetch.
     */
    where?: ApiKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiKeys to fetch.
     */
    orderBy?: ApiKeyOrderByWithRelationInput | ApiKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApiKeys.
     */
    cursor?: ApiKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApiKeys.
     */
    distinct?: ApiKeyScalarFieldEnum | ApiKeyScalarFieldEnum[]
  }

  /**
   * ApiKey findMany
   */
  export type ApiKeyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * Filter, which ApiKeys to fetch.
     */
    where?: ApiKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiKeys to fetch.
     */
    orderBy?: ApiKeyOrderByWithRelationInput | ApiKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ApiKeys.
     */
    cursor?: ApiKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiKeys.
     */
    skip?: number
    distinct?: ApiKeyScalarFieldEnum | ApiKeyScalarFieldEnum[]
  }

  /**
   * ApiKey create
   */
  export type ApiKeyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * The data needed to create a ApiKey.
     */
    data: XOR<ApiKeyCreateInput, ApiKeyUncheckedCreateInput>
  }

  /**
   * ApiKey createMany
   */
  export type ApiKeyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ApiKeys.
     */
    data: ApiKeyCreateManyInput | ApiKeyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ApiKey createManyAndReturn
   */
  export type ApiKeyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * The data used to create many ApiKeys.
     */
    data: ApiKeyCreateManyInput | ApiKeyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ApiKey update
   */
  export type ApiKeyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * The data needed to update a ApiKey.
     */
    data: XOR<ApiKeyUpdateInput, ApiKeyUncheckedUpdateInput>
    /**
     * Choose, which ApiKey to update.
     */
    where: ApiKeyWhereUniqueInput
  }

  /**
   * ApiKey updateMany
   */
  export type ApiKeyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ApiKeys.
     */
    data: XOR<ApiKeyUpdateManyMutationInput, ApiKeyUncheckedUpdateManyInput>
    /**
     * Filter which ApiKeys to update
     */
    where?: ApiKeyWhereInput
    /**
     * Limit how many ApiKeys to update.
     */
    limit?: number
  }

  /**
   * ApiKey updateManyAndReturn
   */
  export type ApiKeyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * The data used to update ApiKeys.
     */
    data: XOR<ApiKeyUpdateManyMutationInput, ApiKeyUncheckedUpdateManyInput>
    /**
     * Filter which ApiKeys to update
     */
    where?: ApiKeyWhereInput
    /**
     * Limit how many ApiKeys to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ApiKey upsert
   */
  export type ApiKeyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * The filter to search for the ApiKey to update in case it exists.
     */
    where: ApiKeyWhereUniqueInput
    /**
     * In case the ApiKey found by the `where` argument doesn't exist, create a new ApiKey with this data.
     */
    create: XOR<ApiKeyCreateInput, ApiKeyUncheckedCreateInput>
    /**
     * In case the ApiKey was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApiKeyUpdateInput, ApiKeyUncheckedUpdateInput>
  }

  /**
   * ApiKey delete
   */
  export type ApiKeyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * Filter which ApiKey to delete.
     */
    where: ApiKeyWhereUniqueInput
  }

  /**
   * ApiKey deleteMany
   */
  export type ApiKeyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApiKeys to delete
     */
    where?: ApiKeyWhereInput
    /**
     * Limit how many ApiKeys to delete.
     */
    limit?: number
  }

  /**
   * ApiKey.activityLogs
   */
  export type ApiKey$activityLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KeyActivityLog
     */
    select?: KeyActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KeyActivityLog
     */
    omit?: KeyActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeyActivityLogInclude<ExtArgs> | null
    where?: KeyActivityLogWhereInput
    orderBy?: KeyActivityLogOrderByWithRelationInput | KeyActivityLogOrderByWithRelationInput[]
    cursor?: KeyActivityLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: KeyActivityLogScalarFieldEnum | KeyActivityLogScalarFieldEnum[]
  }

  /**
   * ApiKey without action
   */
  export type ApiKeyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
  }


  /**
   * Model KeyActivityLog
   */

  export type AggregateKeyActivityLog = {
    _count: KeyActivityLogCountAggregateOutputType | null
    _min: KeyActivityLogMinAggregateOutputType | null
    _max: KeyActivityLogMaxAggregateOutputType | null
  }

  export type KeyActivityLogMinAggregateOutputType = {
    id: string | null
    keyId: string | null
    module: string | null
    action: string | null
    status: string | null
    ipAddress: string | null
    timestamp: Date | null
  }

  export type KeyActivityLogMaxAggregateOutputType = {
    id: string | null
    keyId: string | null
    module: string | null
    action: string | null
    status: string | null
    ipAddress: string | null
    timestamp: Date | null
  }

  export type KeyActivityLogCountAggregateOutputType = {
    id: number
    keyId: number
    module: number
    action: number
    status: number
    ipAddress: number
    timestamp: number
    _all: number
  }


  export type KeyActivityLogMinAggregateInputType = {
    id?: true
    keyId?: true
    module?: true
    action?: true
    status?: true
    ipAddress?: true
    timestamp?: true
  }

  export type KeyActivityLogMaxAggregateInputType = {
    id?: true
    keyId?: true
    module?: true
    action?: true
    status?: true
    ipAddress?: true
    timestamp?: true
  }

  export type KeyActivityLogCountAggregateInputType = {
    id?: true
    keyId?: true
    module?: true
    action?: true
    status?: true
    ipAddress?: true
    timestamp?: true
    _all?: true
  }

  export type KeyActivityLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which KeyActivityLog to aggregate.
     */
    where?: KeyActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KeyActivityLogs to fetch.
     */
    orderBy?: KeyActivityLogOrderByWithRelationInput | KeyActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: KeyActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KeyActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KeyActivityLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned KeyActivityLogs
    **/
    _count?: true | KeyActivityLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KeyActivityLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KeyActivityLogMaxAggregateInputType
  }

  export type GetKeyActivityLogAggregateType<T extends KeyActivityLogAggregateArgs> = {
        [P in keyof T & keyof AggregateKeyActivityLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKeyActivityLog[P]>
      : GetScalarType<T[P], AggregateKeyActivityLog[P]>
  }




  export type KeyActivityLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KeyActivityLogWhereInput
    orderBy?: KeyActivityLogOrderByWithAggregationInput | KeyActivityLogOrderByWithAggregationInput[]
    by: KeyActivityLogScalarFieldEnum[] | KeyActivityLogScalarFieldEnum
    having?: KeyActivityLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KeyActivityLogCountAggregateInputType | true
    _min?: KeyActivityLogMinAggregateInputType
    _max?: KeyActivityLogMaxAggregateInputType
  }

  export type KeyActivityLogGroupByOutputType = {
    id: string
    keyId: string
    module: string
    action: string
    status: string
    ipAddress: string | null
    timestamp: Date
    _count: KeyActivityLogCountAggregateOutputType | null
    _min: KeyActivityLogMinAggregateOutputType | null
    _max: KeyActivityLogMaxAggregateOutputType | null
  }

  type GetKeyActivityLogGroupByPayload<T extends KeyActivityLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KeyActivityLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KeyActivityLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KeyActivityLogGroupByOutputType[P]>
            : GetScalarType<T[P], KeyActivityLogGroupByOutputType[P]>
        }
      >
    >


  export type KeyActivityLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    keyId?: boolean
    module?: boolean
    action?: boolean
    status?: boolean
    ipAddress?: boolean
    timestamp?: boolean
    key?: boolean | ApiKeyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["keyActivityLog"]>

  export type KeyActivityLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    keyId?: boolean
    module?: boolean
    action?: boolean
    status?: boolean
    ipAddress?: boolean
    timestamp?: boolean
    key?: boolean | ApiKeyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["keyActivityLog"]>

  export type KeyActivityLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    keyId?: boolean
    module?: boolean
    action?: boolean
    status?: boolean
    ipAddress?: boolean
    timestamp?: boolean
    key?: boolean | ApiKeyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["keyActivityLog"]>

  export type KeyActivityLogSelectScalar = {
    id?: boolean
    keyId?: boolean
    module?: boolean
    action?: boolean
    status?: boolean
    ipAddress?: boolean
    timestamp?: boolean
  }

  export type KeyActivityLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "keyId" | "module" | "action" | "status" | "ipAddress" | "timestamp", ExtArgs["result"]["keyActivityLog"]>
  export type KeyActivityLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    key?: boolean | ApiKeyDefaultArgs<ExtArgs>
  }
  export type KeyActivityLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    key?: boolean | ApiKeyDefaultArgs<ExtArgs>
  }
  export type KeyActivityLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    key?: boolean | ApiKeyDefaultArgs<ExtArgs>
  }

  export type $KeyActivityLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "KeyActivityLog"
    objects: {
      key: Prisma.$ApiKeyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      keyId: string
      module: string
      action: string
      status: string
      ipAddress: string | null
      timestamp: Date
    }, ExtArgs["result"]["keyActivityLog"]>
    composites: {}
  }

  type KeyActivityLogGetPayload<S extends boolean | null | undefined | KeyActivityLogDefaultArgs> = $Result.GetResult<Prisma.$KeyActivityLogPayload, S>

  type KeyActivityLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<KeyActivityLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: KeyActivityLogCountAggregateInputType | true
    }

  export interface KeyActivityLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['KeyActivityLog'], meta: { name: 'KeyActivityLog' } }
    /**
     * Find zero or one KeyActivityLog that matches the filter.
     * @param {KeyActivityLogFindUniqueArgs} args - Arguments to find a KeyActivityLog
     * @example
     * // Get one KeyActivityLog
     * const keyActivityLog = await prisma.keyActivityLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends KeyActivityLogFindUniqueArgs>(args: SelectSubset<T, KeyActivityLogFindUniqueArgs<ExtArgs>>): Prisma__KeyActivityLogClient<$Result.GetResult<Prisma.$KeyActivityLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one KeyActivityLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {KeyActivityLogFindUniqueOrThrowArgs} args - Arguments to find a KeyActivityLog
     * @example
     * // Get one KeyActivityLog
     * const keyActivityLog = await prisma.keyActivityLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends KeyActivityLogFindUniqueOrThrowArgs>(args: SelectSubset<T, KeyActivityLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__KeyActivityLogClient<$Result.GetResult<Prisma.$KeyActivityLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first KeyActivityLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeyActivityLogFindFirstArgs} args - Arguments to find a KeyActivityLog
     * @example
     * // Get one KeyActivityLog
     * const keyActivityLog = await prisma.keyActivityLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends KeyActivityLogFindFirstArgs>(args?: SelectSubset<T, KeyActivityLogFindFirstArgs<ExtArgs>>): Prisma__KeyActivityLogClient<$Result.GetResult<Prisma.$KeyActivityLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first KeyActivityLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeyActivityLogFindFirstOrThrowArgs} args - Arguments to find a KeyActivityLog
     * @example
     * // Get one KeyActivityLog
     * const keyActivityLog = await prisma.keyActivityLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends KeyActivityLogFindFirstOrThrowArgs>(args?: SelectSubset<T, KeyActivityLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__KeyActivityLogClient<$Result.GetResult<Prisma.$KeyActivityLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more KeyActivityLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeyActivityLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all KeyActivityLogs
     * const keyActivityLogs = await prisma.keyActivityLog.findMany()
     * 
     * // Get first 10 KeyActivityLogs
     * const keyActivityLogs = await prisma.keyActivityLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const keyActivityLogWithIdOnly = await prisma.keyActivityLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends KeyActivityLogFindManyArgs>(args?: SelectSubset<T, KeyActivityLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KeyActivityLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a KeyActivityLog.
     * @param {KeyActivityLogCreateArgs} args - Arguments to create a KeyActivityLog.
     * @example
     * // Create one KeyActivityLog
     * const KeyActivityLog = await prisma.keyActivityLog.create({
     *   data: {
     *     // ... data to create a KeyActivityLog
     *   }
     * })
     * 
     */
    create<T extends KeyActivityLogCreateArgs>(args: SelectSubset<T, KeyActivityLogCreateArgs<ExtArgs>>): Prisma__KeyActivityLogClient<$Result.GetResult<Prisma.$KeyActivityLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many KeyActivityLogs.
     * @param {KeyActivityLogCreateManyArgs} args - Arguments to create many KeyActivityLogs.
     * @example
     * // Create many KeyActivityLogs
     * const keyActivityLog = await prisma.keyActivityLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends KeyActivityLogCreateManyArgs>(args?: SelectSubset<T, KeyActivityLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many KeyActivityLogs and returns the data saved in the database.
     * @param {KeyActivityLogCreateManyAndReturnArgs} args - Arguments to create many KeyActivityLogs.
     * @example
     * // Create many KeyActivityLogs
     * const keyActivityLog = await prisma.keyActivityLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many KeyActivityLogs and only return the `id`
     * const keyActivityLogWithIdOnly = await prisma.keyActivityLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends KeyActivityLogCreateManyAndReturnArgs>(args?: SelectSubset<T, KeyActivityLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KeyActivityLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a KeyActivityLog.
     * @param {KeyActivityLogDeleteArgs} args - Arguments to delete one KeyActivityLog.
     * @example
     * // Delete one KeyActivityLog
     * const KeyActivityLog = await prisma.keyActivityLog.delete({
     *   where: {
     *     // ... filter to delete one KeyActivityLog
     *   }
     * })
     * 
     */
    delete<T extends KeyActivityLogDeleteArgs>(args: SelectSubset<T, KeyActivityLogDeleteArgs<ExtArgs>>): Prisma__KeyActivityLogClient<$Result.GetResult<Prisma.$KeyActivityLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one KeyActivityLog.
     * @param {KeyActivityLogUpdateArgs} args - Arguments to update one KeyActivityLog.
     * @example
     * // Update one KeyActivityLog
     * const keyActivityLog = await prisma.keyActivityLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends KeyActivityLogUpdateArgs>(args: SelectSubset<T, KeyActivityLogUpdateArgs<ExtArgs>>): Prisma__KeyActivityLogClient<$Result.GetResult<Prisma.$KeyActivityLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more KeyActivityLogs.
     * @param {KeyActivityLogDeleteManyArgs} args - Arguments to filter KeyActivityLogs to delete.
     * @example
     * // Delete a few KeyActivityLogs
     * const { count } = await prisma.keyActivityLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends KeyActivityLogDeleteManyArgs>(args?: SelectSubset<T, KeyActivityLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more KeyActivityLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeyActivityLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many KeyActivityLogs
     * const keyActivityLog = await prisma.keyActivityLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends KeyActivityLogUpdateManyArgs>(args: SelectSubset<T, KeyActivityLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more KeyActivityLogs and returns the data updated in the database.
     * @param {KeyActivityLogUpdateManyAndReturnArgs} args - Arguments to update many KeyActivityLogs.
     * @example
     * // Update many KeyActivityLogs
     * const keyActivityLog = await prisma.keyActivityLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more KeyActivityLogs and only return the `id`
     * const keyActivityLogWithIdOnly = await prisma.keyActivityLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends KeyActivityLogUpdateManyAndReturnArgs>(args: SelectSubset<T, KeyActivityLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KeyActivityLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one KeyActivityLog.
     * @param {KeyActivityLogUpsertArgs} args - Arguments to update or create a KeyActivityLog.
     * @example
     * // Update or create a KeyActivityLog
     * const keyActivityLog = await prisma.keyActivityLog.upsert({
     *   create: {
     *     // ... data to create a KeyActivityLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the KeyActivityLog we want to update
     *   }
     * })
     */
    upsert<T extends KeyActivityLogUpsertArgs>(args: SelectSubset<T, KeyActivityLogUpsertArgs<ExtArgs>>): Prisma__KeyActivityLogClient<$Result.GetResult<Prisma.$KeyActivityLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of KeyActivityLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeyActivityLogCountArgs} args - Arguments to filter KeyActivityLogs to count.
     * @example
     * // Count the number of KeyActivityLogs
     * const count = await prisma.keyActivityLog.count({
     *   where: {
     *     // ... the filter for the KeyActivityLogs we want to count
     *   }
     * })
    **/
    count<T extends KeyActivityLogCountArgs>(
      args?: Subset<T, KeyActivityLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KeyActivityLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a KeyActivityLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeyActivityLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends KeyActivityLogAggregateArgs>(args: Subset<T, KeyActivityLogAggregateArgs>): Prisma.PrismaPromise<GetKeyActivityLogAggregateType<T>>

    /**
     * Group by KeyActivityLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeyActivityLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends KeyActivityLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: KeyActivityLogGroupByArgs['orderBy'] }
        : { orderBy?: KeyActivityLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, KeyActivityLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKeyActivityLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the KeyActivityLog model
   */
  readonly fields: KeyActivityLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for KeyActivityLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__KeyActivityLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    key<T extends ApiKeyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ApiKeyDefaultArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the KeyActivityLog model
   */
  interface KeyActivityLogFieldRefs {
    readonly id: FieldRef<"KeyActivityLog", 'String'>
    readonly keyId: FieldRef<"KeyActivityLog", 'String'>
    readonly module: FieldRef<"KeyActivityLog", 'String'>
    readonly action: FieldRef<"KeyActivityLog", 'String'>
    readonly status: FieldRef<"KeyActivityLog", 'String'>
    readonly ipAddress: FieldRef<"KeyActivityLog", 'String'>
    readonly timestamp: FieldRef<"KeyActivityLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * KeyActivityLog findUnique
   */
  export type KeyActivityLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KeyActivityLog
     */
    select?: KeyActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KeyActivityLog
     */
    omit?: KeyActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeyActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which KeyActivityLog to fetch.
     */
    where: KeyActivityLogWhereUniqueInput
  }

  /**
   * KeyActivityLog findUniqueOrThrow
   */
  export type KeyActivityLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KeyActivityLog
     */
    select?: KeyActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KeyActivityLog
     */
    omit?: KeyActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeyActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which KeyActivityLog to fetch.
     */
    where: KeyActivityLogWhereUniqueInput
  }

  /**
   * KeyActivityLog findFirst
   */
  export type KeyActivityLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KeyActivityLog
     */
    select?: KeyActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KeyActivityLog
     */
    omit?: KeyActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeyActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which KeyActivityLog to fetch.
     */
    where?: KeyActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KeyActivityLogs to fetch.
     */
    orderBy?: KeyActivityLogOrderByWithRelationInput | KeyActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for KeyActivityLogs.
     */
    cursor?: KeyActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KeyActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KeyActivityLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of KeyActivityLogs.
     */
    distinct?: KeyActivityLogScalarFieldEnum | KeyActivityLogScalarFieldEnum[]
  }

  /**
   * KeyActivityLog findFirstOrThrow
   */
  export type KeyActivityLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KeyActivityLog
     */
    select?: KeyActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KeyActivityLog
     */
    omit?: KeyActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeyActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which KeyActivityLog to fetch.
     */
    where?: KeyActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KeyActivityLogs to fetch.
     */
    orderBy?: KeyActivityLogOrderByWithRelationInput | KeyActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for KeyActivityLogs.
     */
    cursor?: KeyActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KeyActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KeyActivityLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of KeyActivityLogs.
     */
    distinct?: KeyActivityLogScalarFieldEnum | KeyActivityLogScalarFieldEnum[]
  }

  /**
   * KeyActivityLog findMany
   */
  export type KeyActivityLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KeyActivityLog
     */
    select?: KeyActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KeyActivityLog
     */
    omit?: KeyActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeyActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which KeyActivityLogs to fetch.
     */
    where?: KeyActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KeyActivityLogs to fetch.
     */
    orderBy?: KeyActivityLogOrderByWithRelationInput | KeyActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing KeyActivityLogs.
     */
    cursor?: KeyActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KeyActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KeyActivityLogs.
     */
    skip?: number
    distinct?: KeyActivityLogScalarFieldEnum | KeyActivityLogScalarFieldEnum[]
  }

  /**
   * KeyActivityLog create
   */
  export type KeyActivityLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KeyActivityLog
     */
    select?: KeyActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KeyActivityLog
     */
    omit?: KeyActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeyActivityLogInclude<ExtArgs> | null
    /**
     * The data needed to create a KeyActivityLog.
     */
    data: XOR<KeyActivityLogCreateInput, KeyActivityLogUncheckedCreateInput>
  }

  /**
   * KeyActivityLog createMany
   */
  export type KeyActivityLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many KeyActivityLogs.
     */
    data: KeyActivityLogCreateManyInput | KeyActivityLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * KeyActivityLog createManyAndReturn
   */
  export type KeyActivityLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KeyActivityLog
     */
    select?: KeyActivityLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the KeyActivityLog
     */
    omit?: KeyActivityLogOmit<ExtArgs> | null
    /**
     * The data used to create many KeyActivityLogs.
     */
    data: KeyActivityLogCreateManyInput | KeyActivityLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeyActivityLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * KeyActivityLog update
   */
  export type KeyActivityLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KeyActivityLog
     */
    select?: KeyActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KeyActivityLog
     */
    omit?: KeyActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeyActivityLogInclude<ExtArgs> | null
    /**
     * The data needed to update a KeyActivityLog.
     */
    data: XOR<KeyActivityLogUpdateInput, KeyActivityLogUncheckedUpdateInput>
    /**
     * Choose, which KeyActivityLog to update.
     */
    where: KeyActivityLogWhereUniqueInput
  }

  /**
   * KeyActivityLog updateMany
   */
  export type KeyActivityLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update KeyActivityLogs.
     */
    data: XOR<KeyActivityLogUpdateManyMutationInput, KeyActivityLogUncheckedUpdateManyInput>
    /**
     * Filter which KeyActivityLogs to update
     */
    where?: KeyActivityLogWhereInput
    /**
     * Limit how many KeyActivityLogs to update.
     */
    limit?: number
  }

  /**
   * KeyActivityLog updateManyAndReturn
   */
  export type KeyActivityLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KeyActivityLog
     */
    select?: KeyActivityLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the KeyActivityLog
     */
    omit?: KeyActivityLogOmit<ExtArgs> | null
    /**
     * The data used to update KeyActivityLogs.
     */
    data: XOR<KeyActivityLogUpdateManyMutationInput, KeyActivityLogUncheckedUpdateManyInput>
    /**
     * Filter which KeyActivityLogs to update
     */
    where?: KeyActivityLogWhereInput
    /**
     * Limit how many KeyActivityLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeyActivityLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * KeyActivityLog upsert
   */
  export type KeyActivityLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KeyActivityLog
     */
    select?: KeyActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KeyActivityLog
     */
    omit?: KeyActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeyActivityLogInclude<ExtArgs> | null
    /**
     * The filter to search for the KeyActivityLog to update in case it exists.
     */
    where: KeyActivityLogWhereUniqueInput
    /**
     * In case the KeyActivityLog found by the `where` argument doesn't exist, create a new KeyActivityLog with this data.
     */
    create: XOR<KeyActivityLogCreateInput, KeyActivityLogUncheckedCreateInput>
    /**
     * In case the KeyActivityLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<KeyActivityLogUpdateInput, KeyActivityLogUncheckedUpdateInput>
  }

  /**
   * KeyActivityLog delete
   */
  export type KeyActivityLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KeyActivityLog
     */
    select?: KeyActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KeyActivityLog
     */
    omit?: KeyActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeyActivityLogInclude<ExtArgs> | null
    /**
     * Filter which KeyActivityLog to delete.
     */
    where: KeyActivityLogWhereUniqueInput
  }

  /**
   * KeyActivityLog deleteMany
   */
  export type KeyActivityLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which KeyActivityLogs to delete
     */
    where?: KeyActivityLogWhereInput
    /**
     * Limit how many KeyActivityLogs to delete.
     */
    limit?: number
  }

  /**
   * KeyActivityLog without action
   */
  export type KeyActivityLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KeyActivityLog
     */
    select?: KeyActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KeyActivityLog
     */
    omit?: KeyActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeyActivityLogInclude<ExtArgs> | null
  }


  /**
   * Model UserProfileExt
   */

  export type AggregateUserProfileExt = {
    _count: UserProfileExtCountAggregateOutputType | null
    _min: UserProfileExtMinAggregateOutputType | null
    _max: UserProfileExtMaxAggregateOutputType | null
  }

  export type UserProfileExtMinAggregateOutputType = {
    id: string | null
    userId: string | null
    phone: string | null
    jobTitle: string | null
    department: string | null
    manager: string | null
    timezone: string | null
    roleTier: string | null
    updatedAt: Date | null
  }

  export type UserProfileExtMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    phone: string | null
    jobTitle: string | null
    department: string | null
    manager: string | null
    timezone: string | null
    roleTier: string | null
    updatedAt: Date | null
  }

  export type UserProfileExtCountAggregateOutputType = {
    id: number
    userId: number
    phone: number
    jobTitle: number
    department: number
    manager: number
    timezone: number
    roleTier: number
    agentPreferences: number
    notificationPrefs: number
    accessScopes: number
    updatedAt: number
    _all: number
  }


  export type UserProfileExtMinAggregateInputType = {
    id?: true
    userId?: true
    phone?: true
    jobTitle?: true
    department?: true
    manager?: true
    timezone?: true
    roleTier?: true
    updatedAt?: true
  }

  export type UserProfileExtMaxAggregateInputType = {
    id?: true
    userId?: true
    phone?: true
    jobTitle?: true
    department?: true
    manager?: true
    timezone?: true
    roleTier?: true
    updatedAt?: true
  }

  export type UserProfileExtCountAggregateInputType = {
    id?: true
    userId?: true
    phone?: true
    jobTitle?: true
    department?: true
    manager?: true
    timezone?: true
    roleTier?: true
    agentPreferences?: true
    notificationPrefs?: true
    accessScopes?: true
    updatedAt?: true
    _all?: true
  }

  export type UserProfileExtAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserProfileExt to aggregate.
     */
    where?: UserProfileExtWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfileExts to fetch.
     */
    orderBy?: UserProfileExtOrderByWithRelationInput | UserProfileExtOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserProfileExtWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfileExts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfileExts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserProfileExts
    **/
    _count?: true | UserProfileExtCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserProfileExtMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserProfileExtMaxAggregateInputType
  }

  export type GetUserProfileExtAggregateType<T extends UserProfileExtAggregateArgs> = {
        [P in keyof T & keyof AggregateUserProfileExt]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserProfileExt[P]>
      : GetScalarType<T[P], AggregateUserProfileExt[P]>
  }




  export type UserProfileExtGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserProfileExtWhereInput
    orderBy?: UserProfileExtOrderByWithAggregationInput | UserProfileExtOrderByWithAggregationInput[]
    by: UserProfileExtScalarFieldEnum[] | UserProfileExtScalarFieldEnum
    having?: UserProfileExtScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserProfileExtCountAggregateInputType | true
    _min?: UserProfileExtMinAggregateInputType
    _max?: UserProfileExtMaxAggregateInputType
  }

  export type UserProfileExtGroupByOutputType = {
    id: string
    userId: string
    phone: string | null
    jobTitle: string | null
    department: string | null
    manager: string | null
    timezone: string | null
    roleTier: string | null
    agentPreferences: JsonValue
    notificationPrefs: JsonValue
    accessScopes: JsonValue
    updatedAt: Date
    _count: UserProfileExtCountAggregateOutputType | null
    _min: UserProfileExtMinAggregateOutputType | null
    _max: UserProfileExtMaxAggregateOutputType | null
  }

  type GetUserProfileExtGroupByPayload<T extends UserProfileExtGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserProfileExtGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserProfileExtGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserProfileExtGroupByOutputType[P]>
            : GetScalarType<T[P], UserProfileExtGroupByOutputType[P]>
        }
      >
    >


  export type UserProfileExtSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    phone?: boolean
    jobTitle?: boolean
    department?: boolean
    manager?: boolean
    timezone?: boolean
    roleTier?: boolean
    agentPreferences?: boolean
    notificationPrefs?: boolean
    accessScopes?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userProfileExt"]>

  export type UserProfileExtSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    phone?: boolean
    jobTitle?: boolean
    department?: boolean
    manager?: boolean
    timezone?: boolean
    roleTier?: boolean
    agentPreferences?: boolean
    notificationPrefs?: boolean
    accessScopes?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userProfileExt"]>

  export type UserProfileExtSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    phone?: boolean
    jobTitle?: boolean
    department?: boolean
    manager?: boolean
    timezone?: boolean
    roleTier?: boolean
    agentPreferences?: boolean
    notificationPrefs?: boolean
    accessScopes?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userProfileExt"]>

  export type UserProfileExtSelectScalar = {
    id?: boolean
    userId?: boolean
    phone?: boolean
    jobTitle?: boolean
    department?: boolean
    manager?: boolean
    timezone?: boolean
    roleTier?: boolean
    agentPreferences?: boolean
    notificationPrefs?: boolean
    accessScopes?: boolean
    updatedAt?: boolean
  }

  export type UserProfileExtOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "phone" | "jobTitle" | "department" | "manager" | "timezone" | "roleTier" | "agentPreferences" | "notificationPrefs" | "accessScopes" | "updatedAt", ExtArgs["result"]["userProfileExt"]>
  export type UserProfileExtInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserProfileExtIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserProfileExtIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserProfileExtPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserProfileExt"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      phone: string | null
      jobTitle: string | null
      department: string | null
      manager: string | null
      timezone: string | null
      roleTier: string | null
      agentPreferences: Prisma.JsonValue
      notificationPrefs: Prisma.JsonValue
      accessScopes: Prisma.JsonValue
      updatedAt: Date
    }, ExtArgs["result"]["userProfileExt"]>
    composites: {}
  }

  type UserProfileExtGetPayload<S extends boolean | null | undefined | UserProfileExtDefaultArgs> = $Result.GetResult<Prisma.$UserProfileExtPayload, S>

  type UserProfileExtCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserProfileExtFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserProfileExtCountAggregateInputType | true
    }

  export interface UserProfileExtDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserProfileExt'], meta: { name: 'UserProfileExt' } }
    /**
     * Find zero or one UserProfileExt that matches the filter.
     * @param {UserProfileExtFindUniqueArgs} args - Arguments to find a UserProfileExt
     * @example
     * // Get one UserProfileExt
     * const userProfileExt = await prisma.userProfileExt.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserProfileExtFindUniqueArgs>(args: SelectSubset<T, UserProfileExtFindUniqueArgs<ExtArgs>>): Prisma__UserProfileExtClient<$Result.GetResult<Prisma.$UserProfileExtPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserProfileExt that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserProfileExtFindUniqueOrThrowArgs} args - Arguments to find a UserProfileExt
     * @example
     * // Get one UserProfileExt
     * const userProfileExt = await prisma.userProfileExt.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserProfileExtFindUniqueOrThrowArgs>(args: SelectSubset<T, UserProfileExtFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserProfileExtClient<$Result.GetResult<Prisma.$UserProfileExtPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserProfileExt that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileExtFindFirstArgs} args - Arguments to find a UserProfileExt
     * @example
     * // Get one UserProfileExt
     * const userProfileExt = await prisma.userProfileExt.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserProfileExtFindFirstArgs>(args?: SelectSubset<T, UserProfileExtFindFirstArgs<ExtArgs>>): Prisma__UserProfileExtClient<$Result.GetResult<Prisma.$UserProfileExtPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserProfileExt that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileExtFindFirstOrThrowArgs} args - Arguments to find a UserProfileExt
     * @example
     * // Get one UserProfileExt
     * const userProfileExt = await prisma.userProfileExt.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserProfileExtFindFirstOrThrowArgs>(args?: SelectSubset<T, UserProfileExtFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserProfileExtClient<$Result.GetResult<Prisma.$UserProfileExtPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserProfileExts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileExtFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserProfileExts
     * const userProfileExts = await prisma.userProfileExt.findMany()
     * 
     * // Get first 10 UserProfileExts
     * const userProfileExts = await prisma.userProfileExt.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userProfileExtWithIdOnly = await prisma.userProfileExt.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserProfileExtFindManyArgs>(args?: SelectSubset<T, UserProfileExtFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProfileExtPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserProfileExt.
     * @param {UserProfileExtCreateArgs} args - Arguments to create a UserProfileExt.
     * @example
     * // Create one UserProfileExt
     * const UserProfileExt = await prisma.userProfileExt.create({
     *   data: {
     *     // ... data to create a UserProfileExt
     *   }
     * })
     * 
     */
    create<T extends UserProfileExtCreateArgs>(args: SelectSubset<T, UserProfileExtCreateArgs<ExtArgs>>): Prisma__UserProfileExtClient<$Result.GetResult<Prisma.$UserProfileExtPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserProfileExts.
     * @param {UserProfileExtCreateManyArgs} args - Arguments to create many UserProfileExts.
     * @example
     * // Create many UserProfileExts
     * const userProfileExt = await prisma.userProfileExt.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserProfileExtCreateManyArgs>(args?: SelectSubset<T, UserProfileExtCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserProfileExts and returns the data saved in the database.
     * @param {UserProfileExtCreateManyAndReturnArgs} args - Arguments to create many UserProfileExts.
     * @example
     * // Create many UserProfileExts
     * const userProfileExt = await prisma.userProfileExt.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserProfileExts and only return the `id`
     * const userProfileExtWithIdOnly = await prisma.userProfileExt.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserProfileExtCreateManyAndReturnArgs>(args?: SelectSubset<T, UserProfileExtCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProfileExtPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserProfileExt.
     * @param {UserProfileExtDeleteArgs} args - Arguments to delete one UserProfileExt.
     * @example
     * // Delete one UserProfileExt
     * const UserProfileExt = await prisma.userProfileExt.delete({
     *   where: {
     *     // ... filter to delete one UserProfileExt
     *   }
     * })
     * 
     */
    delete<T extends UserProfileExtDeleteArgs>(args: SelectSubset<T, UserProfileExtDeleteArgs<ExtArgs>>): Prisma__UserProfileExtClient<$Result.GetResult<Prisma.$UserProfileExtPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserProfileExt.
     * @param {UserProfileExtUpdateArgs} args - Arguments to update one UserProfileExt.
     * @example
     * // Update one UserProfileExt
     * const userProfileExt = await prisma.userProfileExt.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserProfileExtUpdateArgs>(args: SelectSubset<T, UserProfileExtUpdateArgs<ExtArgs>>): Prisma__UserProfileExtClient<$Result.GetResult<Prisma.$UserProfileExtPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserProfileExts.
     * @param {UserProfileExtDeleteManyArgs} args - Arguments to filter UserProfileExts to delete.
     * @example
     * // Delete a few UserProfileExts
     * const { count } = await prisma.userProfileExt.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserProfileExtDeleteManyArgs>(args?: SelectSubset<T, UserProfileExtDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserProfileExts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileExtUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserProfileExts
     * const userProfileExt = await prisma.userProfileExt.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserProfileExtUpdateManyArgs>(args: SelectSubset<T, UserProfileExtUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserProfileExts and returns the data updated in the database.
     * @param {UserProfileExtUpdateManyAndReturnArgs} args - Arguments to update many UserProfileExts.
     * @example
     * // Update many UserProfileExts
     * const userProfileExt = await prisma.userProfileExt.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserProfileExts and only return the `id`
     * const userProfileExtWithIdOnly = await prisma.userProfileExt.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserProfileExtUpdateManyAndReturnArgs>(args: SelectSubset<T, UserProfileExtUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProfileExtPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserProfileExt.
     * @param {UserProfileExtUpsertArgs} args - Arguments to update or create a UserProfileExt.
     * @example
     * // Update or create a UserProfileExt
     * const userProfileExt = await prisma.userProfileExt.upsert({
     *   create: {
     *     // ... data to create a UserProfileExt
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserProfileExt we want to update
     *   }
     * })
     */
    upsert<T extends UserProfileExtUpsertArgs>(args: SelectSubset<T, UserProfileExtUpsertArgs<ExtArgs>>): Prisma__UserProfileExtClient<$Result.GetResult<Prisma.$UserProfileExtPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserProfileExts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileExtCountArgs} args - Arguments to filter UserProfileExts to count.
     * @example
     * // Count the number of UserProfileExts
     * const count = await prisma.userProfileExt.count({
     *   where: {
     *     // ... the filter for the UserProfileExts we want to count
     *   }
     * })
    **/
    count<T extends UserProfileExtCountArgs>(
      args?: Subset<T, UserProfileExtCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserProfileExtCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserProfileExt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileExtAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserProfileExtAggregateArgs>(args: Subset<T, UserProfileExtAggregateArgs>): Prisma.PrismaPromise<GetUserProfileExtAggregateType<T>>

    /**
     * Group by UserProfileExt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileExtGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserProfileExtGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserProfileExtGroupByArgs['orderBy'] }
        : { orderBy?: UserProfileExtGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserProfileExtGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserProfileExtGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserProfileExt model
   */
  readonly fields: UserProfileExtFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserProfileExt.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserProfileExtClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserProfileExt model
   */
  interface UserProfileExtFieldRefs {
    readonly id: FieldRef<"UserProfileExt", 'String'>
    readonly userId: FieldRef<"UserProfileExt", 'String'>
    readonly phone: FieldRef<"UserProfileExt", 'String'>
    readonly jobTitle: FieldRef<"UserProfileExt", 'String'>
    readonly department: FieldRef<"UserProfileExt", 'String'>
    readonly manager: FieldRef<"UserProfileExt", 'String'>
    readonly timezone: FieldRef<"UserProfileExt", 'String'>
    readonly roleTier: FieldRef<"UserProfileExt", 'String'>
    readonly agentPreferences: FieldRef<"UserProfileExt", 'Json'>
    readonly notificationPrefs: FieldRef<"UserProfileExt", 'Json'>
    readonly accessScopes: FieldRef<"UserProfileExt", 'Json'>
    readonly updatedAt: FieldRef<"UserProfileExt", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserProfileExt findUnique
   */
  export type UserProfileExtFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfileExt
     */
    select?: UserProfileExtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfileExt
     */
    omit?: UserProfileExtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileExtInclude<ExtArgs> | null
    /**
     * Filter, which UserProfileExt to fetch.
     */
    where: UserProfileExtWhereUniqueInput
  }

  /**
   * UserProfileExt findUniqueOrThrow
   */
  export type UserProfileExtFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfileExt
     */
    select?: UserProfileExtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfileExt
     */
    omit?: UserProfileExtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileExtInclude<ExtArgs> | null
    /**
     * Filter, which UserProfileExt to fetch.
     */
    where: UserProfileExtWhereUniqueInput
  }

  /**
   * UserProfileExt findFirst
   */
  export type UserProfileExtFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfileExt
     */
    select?: UserProfileExtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfileExt
     */
    omit?: UserProfileExtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileExtInclude<ExtArgs> | null
    /**
     * Filter, which UserProfileExt to fetch.
     */
    where?: UserProfileExtWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfileExts to fetch.
     */
    orderBy?: UserProfileExtOrderByWithRelationInput | UserProfileExtOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserProfileExts.
     */
    cursor?: UserProfileExtWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfileExts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfileExts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserProfileExts.
     */
    distinct?: UserProfileExtScalarFieldEnum | UserProfileExtScalarFieldEnum[]
  }

  /**
   * UserProfileExt findFirstOrThrow
   */
  export type UserProfileExtFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfileExt
     */
    select?: UserProfileExtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfileExt
     */
    omit?: UserProfileExtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileExtInclude<ExtArgs> | null
    /**
     * Filter, which UserProfileExt to fetch.
     */
    where?: UserProfileExtWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfileExts to fetch.
     */
    orderBy?: UserProfileExtOrderByWithRelationInput | UserProfileExtOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserProfileExts.
     */
    cursor?: UserProfileExtWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfileExts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfileExts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserProfileExts.
     */
    distinct?: UserProfileExtScalarFieldEnum | UserProfileExtScalarFieldEnum[]
  }

  /**
   * UserProfileExt findMany
   */
  export type UserProfileExtFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfileExt
     */
    select?: UserProfileExtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfileExt
     */
    omit?: UserProfileExtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileExtInclude<ExtArgs> | null
    /**
     * Filter, which UserProfileExts to fetch.
     */
    where?: UserProfileExtWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfileExts to fetch.
     */
    orderBy?: UserProfileExtOrderByWithRelationInput | UserProfileExtOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserProfileExts.
     */
    cursor?: UserProfileExtWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfileExts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfileExts.
     */
    skip?: number
    distinct?: UserProfileExtScalarFieldEnum | UserProfileExtScalarFieldEnum[]
  }

  /**
   * UserProfileExt create
   */
  export type UserProfileExtCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfileExt
     */
    select?: UserProfileExtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfileExt
     */
    omit?: UserProfileExtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileExtInclude<ExtArgs> | null
    /**
     * The data needed to create a UserProfileExt.
     */
    data: XOR<UserProfileExtCreateInput, UserProfileExtUncheckedCreateInput>
  }

  /**
   * UserProfileExt createMany
   */
  export type UserProfileExtCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserProfileExts.
     */
    data: UserProfileExtCreateManyInput | UserProfileExtCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserProfileExt createManyAndReturn
   */
  export type UserProfileExtCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfileExt
     */
    select?: UserProfileExtSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfileExt
     */
    omit?: UserProfileExtOmit<ExtArgs> | null
    /**
     * The data used to create many UserProfileExts.
     */
    data: UserProfileExtCreateManyInput | UserProfileExtCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileExtIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserProfileExt update
   */
  export type UserProfileExtUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfileExt
     */
    select?: UserProfileExtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfileExt
     */
    omit?: UserProfileExtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileExtInclude<ExtArgs> | null
    /**
     * The data needed to update a UserProfileExt.
     */
    data: XOR<UserProfileExtUpdateInput, UserProfileExtUncheckedUpdateInput>
    /**
     * Choose, which UserProfileExt to update.
     */
    where: UserProfileExtWhereUniqueInput
  }

  /**
   * UserProfileExt updateMany
   */
  export type UserProfileExtUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserProfileExts.
     */
    data: XOR<UserProfileExtUpdateManyMutationInput, UserProfileExtUncheckedUpdateManyInput>
    /**
     * Filter which UserProfileExts to update
     */
    where?: UserProfileExtWhereInput
    /**
     * Limit how many UserProfileExts to update.
     */
    limit?: number
  }

  /**
   * UserProfileExt updateManyAndReturn
   */
  export type UserProfileExtUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfileExt
     */
    select?: UserProfileExtSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfileExt
     */
    omit?: UserProfileExtOmit<ExtArgs> | null
    /**
     * The data used to update UserProfileExts.
     */
    data: XOR<UserProfileExtUpdateManyMutationInput, UserProfileExtUncheckedUpdateManyInput>
    /**
     * Filter which UserProfileExts to update
     */
    where?: UserProfileExtWhereInput
    /**
     * Limit how many UserProfileExts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileExtIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserProfileExt upsert
   */
  export type UserProfileExtUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfileExt
     */
    select?: UserProfileExtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfileExt
     */
    omit?: UserProfileExtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileExtInclude<ExtArgs> | null
    /**
     * The filter to search for the UserProfileExt to update in case it exists.
     */
    where: UserProfileExtWhereUniqueInput
    /**
     * In case the UserProfileExt found by the `where` argument doesn't exist, create a new UserProfileExt with this data.
     */
    create: XOR<UserProfileExtCreateInput, UserProfileExtUncheckedCreateInput>
    /**
     * In case the UserProfileExt was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserProfileExtUpdateInput, UserProfileExtUncheckedUpdateInput>
  }

  /**
   * UserProfileExt delete
   */
  export type UserProfileExtDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfileExt
     */
    select?: UserProfileExtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfileExt
     */
    omit?: UserProfileExtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileExtInclude<ExtArgs> | null
    /**
     * Filter which UserProfileExt to delete.
     */
    where: UserProfileExtWhereUniqueInput
  }

  /**
   * UserProfileExt deleteMany
   */
  export type UserProfileExtDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserProfileExts to delete
     */
    where?: UserProfileExtWhereInput
    /**
     * Limit how many UserProfileExts to delete.
     */
    limit?: number
  }

  /**
   * UserProfileExt without action
   */
  export type UserProfileExtDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfileExt
     */
    select?: UserProfileExtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfileExt
     */
    omit?: UserProfileExtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileExtInclude<ExtArgs> | null
  }


  /**
   * Model ThemePreference
   */

  export type AggregateThemePreference = {
    _count: ThemePreferenceCountAggregateOutputType | null
    _min: ThemePreferenceMinAggregateOutputType | null
    _max: ThemePreferenceMaxAggregateOutputType | null
  }

  export type ThemePreferenceMinAggregateOutputType = {
    id: string | null
    userId: string | null
    mode: string | null
    accentColor: string | null
    uiDensity: string | null
    codeTheme: string | null
    visualizationStyle: string | null
    updatedAt: Date | null
  }

  export type ThemePreferenceMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    mode: string | null
    accentColor: string | null
    uiDensity: string | null
    codeTheme: string | null
    visualizationStyle: string | null
    updatedAt: Date | null
  }

  export type ThemePreferenceCountAggregateOutputType = {
    id: number
    userId: number
    mode: number
    accentColor: number
    uiDensity: number
    codeTheme: number
    visualizationStyle: number
    updatedAt: number
    _all: number
  }


  export type ThemePreferenceMinAggregateInputType = {
    id?: true
    userId?: true
    mode?: true
    accentColor?: true
    uiDensity?: true
    codeTheme?: true
    visualizationStyle?: true
    updatedAt?: true
  }

  export type ThemePreferenceMaxAggregateInputType = {
    id?: true
    userId?: true
    mode?: true
    accentColor?: true
    uiDensity?: true
    codeTheme?: true
    visualizationStyle?: true
    updatedAt?: true
  }

  export type ThemePreferenceCountAggregateInputType = {
    id?: true
    userId?: true
    mode?: true
    accentColor?: true
    uiDensity?: true
    codeTheme?: true
    visualizationStyle?: true
    updatedAt?: true
    _all?: true
  }

  export type ThemePreferenceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ThemePreference to aggregate.
     */
    where?: ThemePreferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ThemePreferences to fetch.
     */
    orderBy?: ThemePreferenceOrderByWithRelationInput | ThemePreferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ThemePreferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ThemePreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ThemePreferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ThemePreferences
    **/
    _count?: true | ThemePreferenceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ThemePreferenceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ThemePreferenceMaxAggregateInputType
  }

  export type GetThemePreferenceAggregateType<T extends ThemePreferenceAggregateArgs> = {
        [P in keyof T & keyof AggregateThemePreference]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateThemePreference[P]>
      : GetScalarType<T[P], AggregateThemePreference[P]>
  }




  export type ThemePreferenceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ThemePreferenceWhereInput
    orderBy?: ThemePreferenceOrderByWithAggregationInput | ThemePreferenceOrderByWithAggregationInput[]
    by: ThemePreferenceScalarFieldEnum[] | ThemePreferenceScalarFieldEnum
    having?: ThemePreferenceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ThemePreferenceCountAggregateInputType | true
    _min?: ThemePreferenceMinAggregateInputType
    _max?: ThemePreferenceMaxAggregateInputType
  }

  export type ThemePreferenceGroupByOutputType = {
    id: string
    userId: string
    mode: string
    accentColor: string | null
    uiDensity: string | null
    codeTheme: string | null
    visualizationStyle: string | null
    updatedAt: Date
    _count: ThemePreferenceCountAggregateOutputType | null
    _min: ThemePreferenceMinAggregateOutputType | null
    _max: ThemePreferenceMaxAggregateOutputType | null
  }

  type GetThemePreferenceGroupByPayload<T extends ThemePreferenceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ThemePreferenceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ThemePreferenceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ThemePreferenceGroupByOutputType[P]>
            : GetScalarType<T[P], ThemePreferenceGroupByOutputType[P]>
        }
      >
    >


  export type ThemePreferenceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    mode?: boolean
    accentColor?: boolean
    uiDensity?: boolean
    codeTheme?: boolean
    visualizationStyle?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["themePreference"]>

  export type ThemePreferenceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    mode?: boolean
    accentColor?: boolean
    uiDensity?: boolean
    codeTheme?: boolean
    visualizationStyle?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["themePreference"]>

  export type ThemePreferenceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    mode?: boolean
    accentColor?: boolean
    uiDensity?: boolean
    codeTheme?: boolean
    visualizationStyle?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["themePreference"]>

  export type ThemePreferenceSelectScalar = {
    id?: boolean
    userId?: boolean
    mode?: boolean
    accentColor?: boolean
    uiDensity?: boolean
    codeTheme?: boolean
    visualizationStyle?: boolean
    updatedAt?: boolean
  }

  export type ThemePreferenceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "mode" | "accentColor" | "uiDensity" | "codeTheme" | "visualizationStyle" | "updatedAt", ExtArgs["result"]["themePreference"]>
  export type ThemePreferenceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ThemePreferenceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ThemePreferenceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ThemePreferencePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ThemePreference"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      mode: string
      accentColor: string | null
      uiDensity: string | null
      codeTheme: string | null
      visualizationStyle: string | null
      updatedAt: Date
    }, ExtArgs["result"]["themePreference"]>
    composites: {}
  }

  type ThemePreferenceGetPayload<S extends boolean | null | undefined | ThemePreferenceDefaultArgs> = $Result.GetResult<Prisma.$ThemePreferencePayload, S>

  type ThemePreferenceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ThemePreferenceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ThemePreferenceCountAggregateInputType | true
    }

  export interface ThemePreferenceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ThemePreference'], meta: { name: 'ThemePreference' } }
    /**
     * Find zero or one ThemePreference that matches the filter.
     * @param {ThemePreferenceFindUniqueArgs} args - Arguments to find a ThemePreference
     * @example
     * // Get one ThemePreference
     * const themePreference = await prisma.themePreference.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ThemePreferenceFindUniqueArgs>(args: SelectSubset<T, ThemePreferenceFindUniqueArgs<ExtArgs>>): Prisma__ThemePreferenceClient<$Result.GetResult<Prisma.$ThemePreferencePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ThemePreference that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ThemePreferenceFindUniqueOrThrowArgs} args - Arguments to find a ThemePreference
     * @example
     * // Get one ThemePreference
     * const themePreference = await prisma.themePreference.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ThemePreferenceFindUniqueOrThrowArgs>(args: SelectSubset<T, ThemePreferenceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ThemePreferenceClient<$Result.GetResult<Prisma.$ThemePreferencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ThemePreference that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThemePreferenceFindFirstArgs} args - Arguments to find a ThemePreference
     * @example
     * // Get one ThemePreference
     * const themePreference = await prisma.themePreference.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ThemePreferenceFindFirstArgs>(args?: SelectSubset<T, ThemePreferenceFindFirstArgs<ExtArgs>>): Prisma__ThemePreferenceClient<$Result.GetResult<Prisma.$ThemePreferencePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ThemePreference that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThemePreferenceFindFirstOrThrowArgs} args - Arguments to find a ThemePreference
     * @example
     * // Get one ThemePreference
     * const themePreference = await prisma.themePreference.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ThemePreferenceFindFirstOrThrowArgs>(args?: SelectSubset<T, ThemePreferenceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ThemePreferenceClient<$Result.GetResult<Prisma.$ThemePreferencePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ThemePreferences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThemePreferenceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ThemePreferences
     * const themePreferences = await prisma.themePreference.findMany()
     * 
     * // Get first 10 ThemePreferences
     * const themePreferences = await prisma.themePreference.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const themePreferenceWithIdOnly = await prisma.themePreference.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ThemePreferenceFindManyArgs>(args?: SelectSubset<T, ThemePreferenceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ThemePreferencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ThemePreference.
     * @param {ThemePreferenceCreateArgs} args - Arguments to create a ThemePreference.
     * @example
     * // Create one ThemePreference
     * const ThemePreference = await prisma.themePreference.create({
     *   data: {
     *     // ... data to create a ThemePreference
     *   }
     * })
     * 
     */
    create<T extends ThemePreferenceCreateArgs>(args: SelectSubset<T, ThemePreferenceCreateArgs<ExtArgs>>): Prisma__ThemePreferenceClient<$Result.GetResult<Prisma.$ThemePreferencePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ThemePreferences.
     * @param {ThemePreferenceCreateManyArgs} args - Arguments to create many ThemePreferences.
     * @example
     * // Create many ThemePreferences
     * const themePreference = await prisma.themePreference.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ThemePreferenceCreateManyArgs>(args?: SelectSubset<T, ThemePreferenceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ThemePreferences and returns the data saved in the database.
     * @param {ThemePreferenceCreateManyAndReturnArgs} args - Arguments to create many ThemePreferences.
     * @example
     * // Create many ThemePreferences
     * const themePreference = await prisma.themePreference.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ThemePreferences and only return the `id`
     * const themePreferenceWithIdOnly = await prisma.themePreference.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ThemePreferenceCreateManyAndReturnArgs>(args?: SelectSubset<T, ThemePreferenceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ThemePreferencePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ThemePreference.
     * @param {ThemePreferenceDeleteArgs} args - Arguments to delete one ThemePreference.
     * @example
     * // Delete one ThemePreference
     * const ThemePreference = await prisma.themePreference.delete({
     *   where: {
     *     // ... filter to delete one ThemePreference
     *   }
     * })
     * 
     */
    delete<T extends ThemePreferenceDeleteArgs>(args: SelectSubset<T, ThemePreferenceDeleteArgs<ExtArgs>>): Prisma__ThemePreferenceClient<$Result.GetResult<Prisma.$ThemePreferencePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ThemePreference.
     * @param {ThemePreferenceUpdateArgs} args - Arguments to update one ThemePreference.
     * @example
     * // Update one ThemePreference
     * const themePreference = await prisma.themePreference.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ThemePreferenceUpdateArgs>(args: SelectSubset<T, ThemePreferenceUpdateArgs<ExtArgs>>): Prisma__ThemePreferenceClient<$Result.GetResult<Prisma.$ThemePreferencePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ThemePreferences.
     * @param {ThemePreferenceDeleteManyArgs} args - Arguments to filter ThemePreferences to delete.
     * @example
     * // Delete a few ThemePreferences
     * const { count } = await prisma.themePreference.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ThemePreferenceDeleteManyArgs>(args?: SelectSubset<T, ThemePreferenceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ThemePreferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThemePreferenceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ThemePreferences
     * const themePreference = await prisma.themePreference.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ThemePreferenceUpdateManyArgs>(args: SelectSubset<T, ThemePreferenceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ThemePreferences and returns the data updated in the database.
     * @param {ThemePreferenceUpdateManyAndReturnArgs} args - Arguments to update many ThemePreferences.
     * @example
     * // Update many ThemePreferences
     * const themePreference = await prisma.themePreference.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ThemePreferences and only return the `id`
     * const themePreferenceWithIdOnly = await prisma.themePreference.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ThemePreferenceUpdateManyAndReturnArgs>(args: SelectSubset<T, ThemePreferenceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ThemePreferencePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ThemePreference.
     * @param {ThemePreferenceUpsertArgs} args - Arguments to update or create a ThemePreference.
     * @example
     * // Update or create a ThemePreference
     * const themePreference = await prisma.themePreference.upsert({
     *   create: {
     *     // ... data to create a ThemePreference
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ThemePreference we want to update
     *   }
     * })
     */
    upsert<T extends ThemePreferenceUpsertArgs>(args: SelectSubset<T, ThemePreferenceUpsertArgs<ExtArgs>>): Prisma__ThemePreferenceClient<$Result.GetResult<Prisma.$ThemePreferencePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ThemePreferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThemePreferenceCountArgs} args - Arguments to filter ThemePreferences to count.
     * @example
     * // Count the number of ThemePreferences
     * const count = await prisma.themePreference.count({
     *   where: {
     *     // ... the filter for the ThemePreferences we want to count
     *   }
     * })
    **/
    count<T extends ThemePreferenceCountArgs>(
      args?: Subset<T, ThemePreferenceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ThemePreferenceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ThemePreference.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThemePreferenceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ThemePreferenceAggregateArgs>(args: Subset<T, ThemePreferenceAggregateArgs>): Prisma.PrismaPromise<GetThemePreferenceAggregateType<T>>

    /**
     * Group by ThemePreference.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThemePreferenceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ThemePreferenceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ThemePreferenceGroupByArgs['orderBy'] }
        : { orderBy?: ThemePreferenceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ThemePreferenceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetThemePreferenceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ThemePreference model
   */
  readonly fields: ThemePreferenceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ThemePreference.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ThemePreferenceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ThemePreference model
   */
  interface ThemePreferenceFieldRefs {
    readonly id: FieldRef<"ThemePreference", 'String'>
    readonly userId: FieldRef<"ThemePreference", 'String'>
    readonly mode: FieldRef<"ThemePreference", 'String'>
    readonly accentColor: FieldRef<"ThemePreference", 'String'>
    readonly uiDensity: FieldRef<"ThemePreference", 'String'>
    readonly codeTheme: FieldRef<"ThemePreference", 'String'>
    readonly visualizationStyle: FieldRef<"ThemePreference", 'String'>
    readonly updatedAt: FieldRef<"ThemePreference", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ThemePreference findUnique
   */
  export type ThemePreferenceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ThemePreference
     */
    select?: ThemePreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ThemePreference
     */
    omit?: ThemePreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThemePreferenceInclude<ExtArgs> | null
    /**
     * Filter, which ThemePreference to fetch.
     */
    where: ThemePreferenceWhereUniqueInput
  }

  /**
   * ThemePreference findUniqueOrThrow
   */
  export type ThemePreferenceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ThemePreference
     */
    select?: ThemePreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ThemePreference
     */
    omit?: ThemePreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThemePreferenceInclude<ExtArgs> | null
    /**
     * Filter, which ThemePreference to fetch.
     */
    where: ThemePreferenceWhereUniqueInput
  }

  /**
   * ThemePreference findFirst
   */
  export type ThemePreferenceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ThemePreference
     */
    select?: ThemePreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ThemePreference
     */
    omit?: ThemePreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThemePreferenceInclude<ExtArgs> | null
    /**
     * Filter, which ThemePreference to fetch.
     */
    where?: ThemePreferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ThemePreferences to fetch.
     */
    orderBy?: ThemePreferenceOrderByWithRelationInput | ThemePreferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ThemePreferences.
     */
    cursor?: ThemePreferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ThemePreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ThemePreferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ThemePreferences.
     */
    distinct?: ThemePreferenceScalarFieldEnum | ThemePreferenceScalarFieldEnum[]
  }

  /**
   * ThemePreference findFirstOrThrow
   */
  export type ThemePreferenceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ThemePreference
     */
    select?: ThemePreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ThemePreference
     */
    omit?: ThemePreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThemePreferenceInclude<ExtArgs> | null
    /**
     * Filter, which ThemePreference to fetch.
     */
    where?: ThemePreferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ThemePreferences to fetch.
     */
    orderBy?: ThemePreferenceOrderByWithRelationInput | ThemePreferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ThemePreferences.
     */
    cursor?: ThemePreferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ThemePreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ThemePreferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ThemePreferences.
     */
    distinct?: ThemePreferenceScalarFieldEnum | ThemePreferenceScalarFieldEnum[]
  }

  /**
   * ThemePreference findMany
   */
  export type ThemePreferenceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ThemePreference
     */
    select?: ThemePreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ThemePreference
     */
    omit?: ThemePreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThemePreferenceInclude<ExtArgs> | null
    /**
     * Filter, which ThemePreferences to fetch.
     */
    where?: ThemePreferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ThemePreferences to fetch.
     */
    orderBy?: ThemePreferenceOrderByWithRelationInput | ThemePreferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ThemePreferences.
     */
    cursor?: ThemePreferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ThemePreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ThemePreferences.
     */
    skip?: number
    distinct?: ThemePreferenceScalarFieldEnum | ThemePreferenceScalarFieldEnum[]
  }

  /**
   * ThemePreference create
   */
  export type ThemePreferenceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ThemePreference
     */
    select?: ThemePreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ThemePreference
     */
    omit?: ThemePreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThemePreferenceInclude<ExtArgs> | null
    /**
     * The data needed to create a ThemePreference.
     */
    data: XOR<ThemePreferenceCreateInput, ThemePreferenceUncheckedCreateInput>
  }

  /**
   * ThemePreference createMany
   */
  export type ThemePreferenceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ThemePreferences.
     */
    data: ThemePreferenceCreateManyInput | ThemePreferenceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ThemePreference createManyAndReturn
   */
  export type ThemePreferenceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ThemePreference
     */
    select?: ThemePreferenceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ThemePreference
     */
    omit?: ThemePreferenceOmit<ExtArgs> | null
    /**
     * The data used to create many ThemePreferences.
     */
    data: ThemePreferenceCreateManyInput | ThemePreferenceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThemePreferenceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ThemePreference update
   */
  export type ThemePreferenceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ThemePreference
     */
    select?: ThemePreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ThemePreference
     */
    omit?: ThemePreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThemePreferenceInclude<ExtArgs> | null
    /**
     * The data needed to update a ThemePreference.
     */
    data: XOR<ThemePreferenceUpdateInput, ThemePreferenceUncheckedUpdateInput>
    /**
     * Choose, which ThemePreference to update.
     */
    where: ThemePreferenceWhereUniqueInput
  }

  /**
   * ThemePreference updateMany
   */
  export type ThemePreferenceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ThemePreferences.
     */
    data: XOR<ThemePreferenceUpdateManyMutationInput, ThemePreferenceUncheckedUpdateManyInput>
    /**
     * Filter which ThemePreferences to update
     */
    where?: ThemePreferenceWhereInput
    /**
     * Limit how many ThemePreferences to update.
     */
    limit?: number
  }

  /**
   * ThemePreference updateManyAndReturn
   */
  export type ThemePreferenceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ThemePreference
     */
    select?: ThemePreferenceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ThemePreference
     */
    omit?: ThemePreferenceOmit<ExtArgs> | null
    /**
     * The data used to update ThemePreferences.
     */
    data: XOR<ThemePreferenceUpdateManyMutationInput, ThemePreferenceUncheckedUpdateManyInput>
    /**
     * Filter which ThemePreferences to update
     */
    where?: ThemePreferenceWhereInput
    /**
     * Limit how many ThemePreferences to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThemePreferenceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ThemePreference upsert
   */
  export type ThemePreferenceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ThemePreference
     */
    select?: ThemePreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ThemePreference
     */
    omit?: ThemePreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThemePreferenceInclude<ExtArgs> | null
    /**
     * The filter to search for the ThemePreference to update in case it exists.
     */
    where: ThemePreferenceWhereUniqueInput
    /**
     * In case the ThemePreference found by the `where` argument doesn't exist, create a new ThemePreference with this data.
     */
    create: XOR<ThemePreferenceCreateInput, ThemePreferenceUncheckedCreateInput>
    /**
     * In case the ThemePreference was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ThemePreferenceUpdateInput, ThemePreferenceUncheckedUpdateInput>
  }

  /**
   * ThemePreference delete
   */
  export type ThemePreferenceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ThemePreference
     */
    select?: ThemePreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ThemePreference
     */
    omit?: ThemePreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThemePreferenceInclude<ExtArgs> | null
    /**
     * Filter which ThemePreference to delete.
     */
    where: ThemePreferenceWhereUniqueInput
  }

  /**
   * ThemePreference deleteMany
   */
  export type ThemePreferenceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ThemePreferences to delete
     */
    where?: ThemePreferenceWhereInput
    /**
     * Limit how many ThemePreferences to delete.
     */
    limit?: number
  }

  /**
   * ThemePreference without action
   */
  export type ThemePreferenceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ThemePreference
     */
    select?: ThemePreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ThemePreference
     */
    omit?: ThemePreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThemePreferenceInclude<ExtArgs> | null
  }


  /**
   * Model SecurityIncident
   */

  export type AggregateSecurityIncident = {
    _count: SecurityIncidentCountAggregateOutputType | null
    _min: SecurityIncidentMinAggregateOutputType | null
    _max: SecurityIncidentMaxAggregateOutputType | null
  }

  export type SecurityIncidentMinAggregateOutputType = {
    id: string | null
    type: string | null
    severity: string | null
    module: string | null
    status: string | null
    timestamp: Date | null
  }

  export type SecurityIncidentMaxAggregateOutputType = {
    id: string | null
    type: string | null
    severity: string | null
    module: string | null
    status: string | null
    timestamp: Date | null
  }

  export type SecurityIncidentCountAggregateOutputType = {
    id: number
    type: number
    severity: number
    module: number
    status: number
    timestamp: number
    _all: number
  }


  export type SecurityIncidentMinAggregateInputType = {
    id?: true
    type?: true
    severity?: true
    module?: true
    status?: true
    timestamp?: true
  }

  export type SecurityIncidentMaxAggregateInputType = {
    id?: true
    type?: true
    severity?: true
    module?: true
    status?: true
    timestamp?: true
  }

  export type SecurityIncidentCountAggregateInputType = {
    id?: true
    type?: true
    severity?: true
    module?: true
    status?: true
    timestamp?: true
    _all?: true
  }

  export type SecurityIncidentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SecurityIncident to aggregate.
     */
    where?: SecurityIncidentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SecurityIncidents to fetch.
     */
    orderBy?: SecurityIncidentOrderByWithRelationInput | SecurityIncidentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SecurityIncidentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SecurityIncidents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SecurityIncidents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SecurityIncidents
    **/
    _count?: true | SecurityIncidentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SecurityIncidentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SecurityIncidentMaxAggregateInputType
  }

  export type GetSecurityIncidentAggregateType<T extends SecurityIncidentAggregateArgs> = {
        [P in keyof T & keyof AggregateSecurityIncident]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSecurityIncident[P]>
      : GetScalarType<T[P], AggregateSecurityIncident[P]>
  }




  export type SecurityIncidentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SecurityIncidentWhereInput
    orderBy?: SecurityIncidentOrderByWithAggregationInput | SecurityIncidentOrderByWithAggregationInput[]
    by: SecurityIncidentScalarFieldEnum[] | SecurityIncidentScalarFieldEnum
    having?: SecurityIncidentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SecurityIncidentCountAggregateInputType | true
    _min?: SecurityIncidentMinAggregateInputType
    _max?: SecurityIncidentMaxAggregateInputType
  }

  export type SecurityIncidentGroupByOutputType = {
    id: string
    type: string
    severity: string
    module: string | null
    status: string
    timestamp: Date
    _count: SecurityIncidentCountAggregateOutputType | null
    _min: SecurityIncidentMinAggregateOutputType | null
    _max: SecurityIncidentMaxAggregateOutputType | null
  }

  type GetSecurityIncidentGroupByPayload<T extends SecurityIncidentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SecurityIncidentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SecurityIncidentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SecurityIncidentGroupByOutputType[P]>
            : GetScalarType<T[P], SecurityIncidentGroupByOutputType[P]>
        }
      >
    >


  export type SecurityIncidentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    severity?: boolean
    module?: boolean
    status?: boolean
    timestamp?: boolean
  }, ExtArgs["result"]["securityIncident"]>

  export type SecurityIncidentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    severity?: boolean
    module?: boolean
    status?: boolean
    timestamp?: boolean
  }, ExtArgs["result"]["securityIncident"]>

  export type SecurityIncidentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    severity?: boolean
    module?: boolean
    status?: boolean
    timestamp?: boolean
  }, ExtArgs["result"]["securityIncident"]>

  export type SecurityIncidentSelectScalar = {
    id?: boolean
    type?: boolean
    severity?: boolean
    module?: boolean
    status?: boolean
    timestamp?: boolean
  }

  export type SecurityIncidentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "severity" | "module" | "status" | "timestamp", ExtArgs["result"]["securityIncident"]>

  export type $SecurityIncidentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SecurityIncident"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: string
      severity: string
      module: string | null
      status: string
      timestamp: Date
    }, ExtArgs["result"]["securityIncident"]>
    composites: {}
  }

  type SecurityIncidentGetPayload<S extends boolean | null | undefined | SecurityIncidentDefaultArgs> = $Result.GetResult<Prisma.$SecurityIncidentPayload, S>

  type SecurityIncidentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SecurityIncidentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SecurityIncidentCountAggregateInputType | true
    }

  export interface SecurityIncidentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SecurityIncident'], meta: { name: 'SecurityIncident' } }
    /**
     * Find zero or one SecurityIncident that matches the filter.
     * @param {SecurityIncidentFindUniqueArgs} args - Arguments to find a SecurityIncident
     * @example
     * // Get one SecurityIncident
     * const securityIncident = await prisma.securityIncident.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SecurityIncidentFindUniqueArgs>(args: SelectSubset<T, SecurityIncidentFindUniqueArgs<ExtArgs>>): Prisma__SecurityIncidentClient<$Result.GetResult<Prisma.$SecurityIncidentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SecurityIncident that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SecurityIncidentFindUniqueOrThrowArgs} args - Arguments to find a SecurityIncident
     * @example
     * // Get one SecurityIncident
     * const securityIncident = await prisma.securityIncident.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SecurityIncidentFindUniqueOrThrowArgs>(args: SelectSubset<T, SecurityIncidentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SecurityIncidentClient<$Result.GetResult<Prisma.$SecurityIncidentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SecurityIncident that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecurityIncidentFindFirstArgs} args - Arguments to find a SecurityIncident
     * @example
     * // Get one SecurityIncident
     * const securityIncident = await prisma.securityIncident.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SecurityIncidentFindFirstArgs>(args?: SelectSubset<T, SecurityIncidentFindFirstArgs<ExtArgs>>): Prisma__SecurityIncidentClient<$Result.GetResult<Prisma.$SecurityIncidentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SecurityIncident that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecurityIncidentFindFirstOrThrowArgs} args - Arguments to find a SecurityIncident
     * @example
     * // Get one SecurityIncident
     * const securityIncident = await prisma.securityIncident.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SecurityIncidentFindFirstOrThrowArgs>(args?: SelectSubset<T, SecurityIncidentFindFirstOrThrowArgs<ExtArgs>>): Prisma__SecurityIncidentClient<$Result.GetResult<Prisma.$SecurityIncidentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SecurityIncidents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecurityIncidentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SecurityIncidents
     * const securityIncidents = await prisma.securityIncident.findMany()
     * 
     * // Get first 10 SecurityIncidents
     * const securityIncidents = await prisma.securityIncident.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const securityIncidentWithIdOnly = await prisma.securityIncident.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SecurityIncidentFindManyArgs>(args?: SelectSubset<T, SecurityIncidentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SecurityIncidentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SecurityIncident.
     * @param {SecurityIncidentCreateArgs} args - Arguments to create a SecurityIncident.
     * @example
     * // Create one SecurityIncident
     * const SecurityIncident = await prisma.securityIncident.create({
     *   data: {
     *     // ... data to create a SecurityIncident
     *   }
     * })
     * 
     */
    create<T extends SecurityIncidentCreateArgs>(args: SelectSubset<T, SecurityIncidentCreateArgs<ExtArgs>>): Prisma__SecurityIncidentClient<$Result.GetResult<Prisma.$SecurityIncidentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SecurityIncidents.
     * @param {SecurityIncidentCreateManyArgs} args - Arguments to create many SecurityIncidents.
     * @example
     * // Create many SecurityIncidents
     * const securityIncident = await prisma.securityIncident.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SecurityIncidentCreateManyArgs>(args?: SelectSubset<T, SecurityIncidentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SecurityIncidents and returns the data saved in the database.
     * @param {SecurityIncidentCreateManyAndReturnArgs} args - Arguments to create many SecurityIncidents.
     * @example
     * // Create many SecurityIncidents
     * const securityIncident = await prisma.securityIncident.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SecurityIncidents and only return the `id`
     * const securityIncidentWithIdOnly = await prisma.securityIncident.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SecurityIncidentCreateManyAndReturnArgs>(args?: SelectSubset<T, SecurityIncidentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SecurityIncidentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SecurityIncident.
     * @param {SecurityIncidentDeleteArgs} args - Arguments to delete one SecurityIncident.
     * @example
     * // Delete one SecurityIncident
     * const SecurityIncident = await prisma.securityIncident.delete({
     *   where: {
     *     // ... filter to delete one SecurityIncident
     *   }
     * })
     * 
     */
    delete<T extends SecurityIncidentDeleteArgs>(args: SelectSubset<T, SecurityIncidentDeleteArgs<ExtArgs>>): Prisma__SecurityIncidentClient<$Result.GetResult<Prisma.$SecurityIncidentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SecurityIncident.
     * @param {SecurityIncidentUpdateArgs} args - Arguments to update one SecurityIncident.
     * @example
     * // Update one SecurityIncident
     * const securityIncident = await prisma.securityIncident.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SecurityIncidentUpdateArgs>(args: SelectSubset<T, SecurityIncidentUpdateArgs<ExtArgs>>): Prisma__SecurityIncidentClient<$Result.GetResult<Prisma.$SecurityIncidentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SecurityIncidents.
     * @param {SecurityIncidentDeleteManyArgs} args - Arguments to filter SecurityIncidents to delete.
     * @example
     * // Delete a few SecurityIncidents
     * const { count } = await prisma.securityIncident.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SecurityIncidentDeleteManyArgs>(args?: SelectSubset<T, SecurityIncidentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SecurityIncidents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecurityIncidentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SecurityIncidents
     * const securityIncident = await prisma.securityIncident.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SecurityIncidentUpdateManyArgs>(args: SelectSubset<T, SecurityIncidentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SecurityIncidents and returns the data updated in the database.
     * @param {SecurityIncidentUpdateManyAndReturnArgs} args - Arguments to update many SecurityIncidents.
     * @example
     * // Update many SecurityIncidents
     * const securityIncident = await prisma.securityIncident.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SecurityIncidents and only return the `id`
     * const securityIncidentWithIdOnly = await prisma.securityIncident.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SecurityIncidentUpdateManyAndReturnArgs>(args: SelectSubset<T, SecurityIncidentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SecurityIncidentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SecurityIncident.
     * @param {SecurityIncidentUpsertArgs} args - Arguments to update or create a SecurityIncident.
     * @example
     * // Update or create a SecurityIncident
     * const securityIncident = await prisma.securityIncident.upsert({
     *   create: {
     *     // ... data to create a SecurityIncident
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SecurityIncident we want to update
     *   }
     * })
     */
    upsert<T extends SecurityIncidentUpsertArgs>(args: SelectSubset<T, SecurityIncidentUpsertArgs<ExtArgs>>): Prisma__SecurityIncidentClient<$Result.GetResult<Prisma.$SecurityIncidentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SecurityIncidents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecurityIncidentCountArgs} args - Arguments to filter SecurityIncidents to count.
     * @example
     * // Count the number of SecurityIncidents
     * const count = await prisma.securityIncident.count({
     *   where: {
     *     // ... the filter for the SecurityIncidents we want to count
     *   }
     * })
    **/
    count<T extends SecurityIncidentCountArgs>(
      args?: Subset<T, SecurityIncidentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SecurityIncidentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SecurityIncident.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecurityIncidentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SecurityIncidentAggregateArgs>(args: Subset<T, SecurityIncidentAggregateArgs>): Prisma.PrismaPromise<GetSecurityIncidentAggregateType<T>>

    /**
     * Group by SecurityIncident.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecurityIncidentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SecurityIncidentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SecurityIncidentGroupByArgs['orderBy'] }
        : { orderBy?: SecurityIncidentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SecurityIncidentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSecurityIncidentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SecurityIncident model
   */
  readonly fields: SecurityIncidentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SecurityIncident.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SecurityIncidentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SecurityIncident model
   */
  interface SecurityIncidentFieldRefs {
    readonly id: FieldRef<"SecurityIncident", 'String'>
    readonly type: FieldRef<"SecurityIncident", 'String'>
    readonly severity: FieldRef<"SecurityIncident", 'String'>
    readonly module: FieldRef<"SecurityIncident", 'String'>
    readonly status: FieldRef<"SecurityIncident", 'String'>
    readonly timestamp: FieldRef<"SecurityIncident", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SecurityIncident findUnique
   */
  export type SecurityIncidentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityIncident
     */
    select?: SecurityIncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityIncident
     */
    omit?: SecurityIncidentOmit<ExtArgs> | null
    /**
     * Filter, which SecurityIncident to fetch.
     */
    where: SecurityIncidentWhereUniqueInput
  }

  /**
   * SecurityIncident findUniqueOrThrow
   */
  export type SecurityIncidentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityIncident
     */
    select?: SecurityIncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityIncident
     */
    omit?: SecurityIncidentOmit<ExtArgs> | null
    /**
     * Filter, which SecurityIncident to fetch.
     */
    where: SecurityIncidentWhereUniqueInput
  }

  /**
   * SecurityIncident findFirst
   */
  export type SecurityIncidentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityIncident
     */
    select?: SecurityIncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityIncident
     */
    omit?: SecurityIncidentOmit<ExtArgs> | null
    /**
     * Filter, which SecurityIncident to fetch.
     */
    where?: SecurityIncidentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SecurityIncidents to fetch.
     */
    orderBy?: SecurityIncidentOrderByWithRelationInput | SecurityIncidentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SecurityIncidents.
     */
    cursor?: SecurityIncidentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SecurityIncidents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SecurityIncidents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SecurityIncidents.
     */
    distinct?: SecurityIncidentScalarFieldEnum | SecurityIncidentScalarFieldEnum[]
  }

  /**
   * SecurityIncident findFirstOrThrow
   */
  export type SecurityIncidentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityIncident
     */
    select?: SecurityIncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityIncident
     */
    omit?: SecurityIncidentOmit<ExtArgs> | null
    /**
     * Filter, which SecurityIncident to fetch.
     */
    where?: SecurityIncidentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SecurityIncidents to fetch.
     */
    orderBy?: SecurityIncidentOrderByWithRelationInput | SecurityIncidentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SecurityIncidents.
     */
    cursor?: SecurityIncidentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SecurityIncidents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SecurityIncidents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SecurityIncidents.
     */
    distinct?: SecurityIncidentScalarFieldEnum | SecurityIncidentScalarFieldEnum[]
  }

  /**
   * SecurityIncident findMany
   */
  export type SecurityIncidentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityIncident
     */
    select?: SecurityIncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityIncident
     */
    omit?: SecurityIncidentOmit<ExtArgs> | null
    /**
     * Filter, which SecurityIncidents to fetch.
     */
    where?: SecurityIncidentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SecurityIncidents to fetch.
     */
    orderBy?: SecurityIncidentOrderByWithRelationInput | SecurityIncidentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SecurityIncidents.
     */
    cursor?: SecurityIncidentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SecurityIncidents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SecurityIncidents.
     */
    skip?: number
    distinct?: SecurityIncidentScalarFieldEnum | SecurityIncidentScalarFieldEnum[]
  }

  /**
   * SecurityIncident create
   */
  export type SecurityIncidentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityIncident
     */
    select?: SecurityIncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityIncident
     */
    omit?: SecurityIncidentOmit<ExtArgs> | null
    /**
     * The data needed to create a SecurityIncident.
     */
    data: XOR<SecurityIncidentCreateInput, SecurityIncidentUncheckedCreateInput>
  }

  /**
   * SecurityIncident createMany
   */
  export type SecurityIncidentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SecurityIncidents.
     */
    data: SecurityIncidentCreateManyInput | SecurityIncidentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SecurityIncident createManyAndReturn
   */
  export type SecurityIncidentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityIncident
     */
    select?: SecurityIncidentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityIncident
     */
    omit?: SecurityIncidentOmit<ExtArgs> | null
    /**
     * The data used to create many SecurityIncidents.
     */
    data: SecurityIncidentCreateManyInput | SecurityIncidentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SecurityIncident update
   */
  export type SecurityIncidentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityIncident
     */
    select?: SecurityIncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityIncident
     */
    omit?: SecurityIncidentOmit<ExtArgs> | null
    /**
     * The data needed to update a SecurityIncident.
     */
    data: XOR<SecurityIncidentUpdateInput, SecurityIncidentUncheckedUpdateInput>
    /**
     * Choose, which SecurityIncident to update.
     */
    where: SecurityIncidentWhereUniqueInput
  }

  /**
   * SecurityIncident updateMany
   */
  export type SecurityIncidentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SecurityIncidents.
     */
    data: XOR<SecurityIncidentUpdateManyMutationInput, SecurityIncidentUncheckedUpdateManyInput>
    /**
     * Filter which SecurityIncidents to update
     */
    where?: SecurityIncidentWhereInput
    /**
     * Limit how many SecurityIncidents to update.
     */
    limit?: number
  }

  /**
   * SecurityIncident updateManyAndReturn
   */
  export type SecurityIncidentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityIncident
     */
    select?: SecurityIncidentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityIncident
     */
    omit?: SecurityIncidentOmit<ExtArgs> | null
    /**
     * The data used to update SecurityIncidents.
     */
    data: XOR<SecurityIncidentUpdateManyMutationInput, SecurityIncidentUncheckedUpdateManyInput>
    /**
     * Filter which SecurityIncidents to update
     */
    where?: SecurityIncidentWhereInput
    /**
     * Limit how many SecurityIncidents to update.
     */
    limit?: number
  }

  /**
   * SecurityIncident upsert
   */
  export type SecurityIncidentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityIncident
     */
    select?: SecurityIncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityIncident
     */
    omit?: SecurityIncidentOmit<ExtArgs> | null
    /**
     * The filter to search for the SecurityIncident to update in case it exists.
     */
    where: SecurityIncidentWhereUniqueInput
    /**
     * In case the SecurityIncident found by the `where` argument doesn't exist, create a new SecurityIncident with this data.
     */
    create: XOR<SecurityIncidentCreateInput, SecurityIncidentUncheckedCreateInput>
    /**
     * In case the SecurityIncident was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SecurityIncidentUpdateInput, SecurityIncidentUncheckedUpdateInput>
  }

  /**
   * SecurityIncident delete
   */
  export type SecurityIncidentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityIncident
     */
    select?: SecurityIncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityIncident
     */
    omit?: SecurityIncidentOmit<ExtArgs> | null
    /**
     * Filter which SecurityIncident to delete.
     */
    where: SecurityIncidentWhereUniqueInput
  }

  /**
   * SecurityIncident deleteMany
   */
  export type SecurityIncidentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SecurityIncidents to delete
     */
    where?: SecurityIncidentWhereInput
    /**
     * Limit how many SecurityIncidents to delete.
     */
    limit?: number
  }

  /**
   * SecurityIncident without action
   */
  export type SecurityIncidentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityIncident
     */
    select?: SecurityIncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityIncident
     */
    omit?: SecurityIncidentOmit<ExtArgs> | null
  }


  /**
   * Model SecurityAuditLog
   */

  export type AggregateSecurityAuditLog = {
    _count: SecurityAuditLogCountAggregateOutputType | null
    _min: SecurityAuditLogMinAggregateOutputType | null
    _max: SecurityAuditLogMaxAggregateOutputType | null
  }

  export type SecurityAuditLogMinAggregateOutputType = {
    id: string | null
    userId: string | null
    action: string | null
    module: string | null
    ipAddress: string | null
    result: string | null
    timestamp: Date | null
  }

  export type SecurityAuditLogMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    action: string | null
    module: string | null
    ipAddress: string | null
    result: string | null
    timestamp: Date | null
  }

  export type SecurityAuditLogCountAggregateOutputType = {
    id: number
    userId: number
    action: number
    module: number
    ipAddress: number
    result: number
    timestamp: number
    _all: number
  }


  export type SecurityAuditLogMinAggregateInputType = {
    id?: true
    userId?: true
    action?: true
    module?: true
    ipAddress?: true
    result?: true
    timestamp?: true
  }

  export type SecurityAuditLogMaxAggregateInputType = {
    id?: true
    userId?: true
    action?: true
    module?: true
    ipAddress?: true
    result?: true
    timestamp?: true
  }

  export type SecurityAuditLogCountAggregateInputType = {
    id?: true
    userId?: true
    action?: true
    module?: true
    ipAddress?: true
    result?: true
    timestamp?: true
    _all?: true
  }

  export type SecurityAuditLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SecurityAuditLog to aggregate.
     */
    where?: SecurityAuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SecurityAuditLogs to fetch.
     */
    orderBy?: SecurityAuditLogOrderByWithRelationInput | SecurityAuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SecurityAuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SecurityAuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SecurityAuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SecurityAuditLogs
    **/
    _count?: true | SecurityAuditLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SecurityAuditLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SecurityAuditLogMaxAggregateInputType
  }

  export type GetSecurityAuditLogAggregateType<T extends SecurityAuditLogAggregateArgs> = {
        [P in keyof T & keyof AggregateSecurityAuditLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSecurityAuditLog[P]>
      : GetScalarType<T[P], AggregateSecurityAuditLog[P]>
  }




  export type SecurityAuditLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SecurityAuditLogWhereInput
    orderBy?: SecurityAuditLogOrderByWithAggregationInput | SecurityAuditLogOrderByWithAggregationInput[]
    by: SecurityAuditLogScalarFieldEnum[] | SecurityAuditLogScalarFieldEnum
    having?: SecurityAuditLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SecurityAuditLogCountAggregateInputType | true
    _min?: SecurityAuditLogMinAggregateInputType
    _max?: SecurityAuditLogMaxAggregateInputType
  }

  export type SecurityAuditLogGroupByOutputType = {
    id: string
    userId: string | null
    action: string
    module: string | null
    ipAddress: string | null
    result: string | null
    timestamp: Date
    _count: SecurityAuditLogCountAggregateOutputType | null
    _min: SecurityAuditLogMinAggregateOutputType | null
    _max: SecurityAuditLogMaxAggregateOutputType | null
  }

  type GetSecurityAuditLogGroupByPayload<T extends SecurityAuditLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SecurityAuditLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SecurityAuditLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SecurityAuditLogGroupByOutputType[P]>
            : GetScalarType<T[P], SecurityAuditLogGroupByOutputType[P]>
        }
      >
    >


  export type SecurityAuditLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    action?: boolean
    module?: boolean
    ipAddress?: boolean
    result?: boolean
    timestamp?: boolean
  }, ExtArgs["result"]["securityAuditLog"]>

  export type SecurityAuditLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    action?: boolean
    module?: boolean
    ipAddress?: boolean
    result?: boolean
    timestamp?: boolean
  }, ExtArgs["result"]["securityAuditLog"]>

  export type SecurityAuditLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    action?: boolean
    module?: boolean
    ipAddress?: boolean
    result?: boolean
    timestamp?: boolean
  }, ExtArgs["result"]["securityAuditLog"]>

  export type SecurityAuditLogSelectScalar = {
    id?: boolean
    userId?: boolean
    action?: boolean
    module?: boolean
    ipAddress?: boolean
    result?: boolean
    timestamp?: boolean
  }

  export type SecurityAuditLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "action" | "module" | "ipAddress" | "result" | "timestamp", ExtArgs["result"]["securityAuditLog"]>

  export type $SecurityAuditLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SecurityAuditLog"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string | null
      action: string
      module: string | null
      ipAddress: string | null
      result: string | null
      timestamp: Date
    }, ExtArgs["result"]["securityAuditLog"]>
    composites: {}
  }

  type SecurityAuditLogGetPayload<S extends boolean | null | undefined | SecurityAuditLogDefaultArgs> = $Result.GetResult<Prisma.$SecurityAuditLogPayload, S>

  type SecurityAuditLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SecurityAuditLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SecurityAuditLogCountAggregateInputType | true
    }

  export interface SecurityAuditLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SecurityAuditLog'], meta: { name: 'SecurityAuditLog' } }
    /**
     * Find zero or one SecurityAuditLog that matches the filter.
     * @param {SecurityAuditLogFindUniqueArgs} args - Arguments to find a SecurityAuditLog
     * @example
     * // Get one SecurityAuditLog
     * const securityAuditLog = await prisma.securityAuditLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SecurityAuditLogFindUniqueArgs>(args: SelectSubset<T, SecurityAuditLogFindUniqueArgs<ExtArgs>>): Prisma__SecurityAuditLogClient<$Result.GetResult<Prisma.$SecurityAuditLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SecurityAuditLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SecurityAuditLogFindUniqueOrThrowArgs} args - Arguments to find a SecurityAuditLog
     * @example
     * // Get one SecurityAuditLog
     * const securityAuditLog = await prisma.securityAuditLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SecurityAuditLogFindUniqueOrThrowArgs>(args: SelectSubset<T, SecurityAuditLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SecurityAuditLogClient<$Result.GetResult<Prisma.$SecurityAuditLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SecurityAuditLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecurityAuditLogFindFirstArgs} args - Arguments to find a SecurityAuditLog
     * @example
     * // Get one SecurityAuditLog
     * const securityAuditLog = await prisma.securityAuditLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SecurityAuditLogFindFirstArgs>(args?: SelectSubset<T, SecurityAuditLogFindFirstArgs<ExtArgs>>): Prisma__SecurityAuditLogClient<$Result.GetResult<Prisma.$SecurityAuditLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SecurityAuditLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecurityAuditLogFindFirstOrThrowArgs} args - Arguments to find a SecurityAuditLog
     * @example
     * // Get one SecurityAuditLog
     * const securityAuditLog = await prisma.securityAuditLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SecurityAuditLogFindFirstOrThrowArgs>(args?: SelectSubset<T, SecurityAuditLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__SecurityAuditLogClient<$Result.GetResult<Prisma.$SecurityAuditLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SecurityAuditLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecurityAuditLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SecurityAuditLogs
     * const securityAuditLogs = await prisma.securityAuditLog.findMany()
     * 
     * // Get first 10 SecurityAuditLogs
     * const securityAuditLogs = await prisma.securityAuditLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const securityAuditLogWithIdOnly = await prisma.securityAuditLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SecurityAuditLogFindManyArgs>(args?: SelectSubset<T, SecurityAuditLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SecurityAuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SecurityAuditLog.
     * @param {SecurityAuditLogCreateArgs} args - Arguments to create a SecurityAuditLog.
     * @example
     * // Create one SecurityAuditLog
     * const SecurityAuditLog = await prisma.securityAuditLog.create({
     *   data: {
     *     // ... data to create a SecurityAuditLog
     *   }
     * })
     * 
     */
    create<T extends SecurityAuditLogCreateArgs>(args: SelectSubset<T, SecurityAuditLogCreateArgs<ExtArgs>>): Prisma__SecurityAuditLogClient<$Result.GetResult<Prisma.$SecurityAuditLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SecurityAuditLogs.
     * @param {SecurityAuditLogCreateManyArgs} args - Arguments to create many SecurityAuditLogs.
     * @example
     * // Create many SecurityAuditLogs
     * const securityAuditLog = await prisma.securityAuditLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SecurityAuditLogCreateManyArgs>(args?: SelectSubset<T, SecurityAuditLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SecurityAuditLogs and returns the data saved in the database.
     * @param {SecurityAuditLogCreateManyAndReturnArgs} args - Arguments to create many SecurityAuditLogs.
     * @example
     * // Create many SecurityAuditLogs
     * const securityAuditLog = await prisma.securityAuditLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SecurityAuditLogs and only return the `id`
     * const securityAuditLogWithIdOnly = await prisma.securityAuditLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SecurityAuditLogCreateManyAndReturnArgs>(args?: SelectSubset<T, SecurityAuditLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SecurityAuditLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SecurityAuditLog.
     * @param {SecurityAuditLogDeleteArgs} args - Arguments to delete one SecurityAuditLog.
     * @example
     * // Delete one SecurityAuditLog
     * const SecurityAuditLog = await prisma.securityAuditLog.delete({
     *   where: {
     *     // ... filter to delete one SecurityAuditLog
     *   }
     * })
     * 
     */
    delete<T extends SecurityAuditLogDeleteArgs>(args: SelectSubset<T, SecurityAuditLogDeleteArgs<ExtArgs>>): Prisma__SecurityAuditLogClient<$Result.GetResult<Prisma.$SecurityAuditLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SecurityAuditLog.
     * @param {SecurityAuditLogUpdateArgs} args - Arguments to update one SecurityAuditLog.
     * @example
     * // Update one SecurityAuditLog
     * const securityAuditLog = await prisma.securityAuditLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SecurityAuditLogUpdateArgs>(args: SelectSubset<T, SecurityAuditLogUpdateArgs<ExtArgs>>): Prisma__SecurityAuditLogClient<$Result.GetResult<Prisma.$SecurityAuditLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SecurityAuditLogs.
     * @param {SecurityAuditLogDeleteManyArgs} args - Arguments to filter SecurityAuditLogs to delete.
     * @example
     * // Delete a few SecurityAuditLogs
     * const { count } = await prisma.securityAuditLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SecurityAuditLogDeleteManyArgs>(args?: SelectSubset<T, SecurityAuditLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SecurityAuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecurityAuditLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SecurityAuditLogs
     * const securityAuditLog = await prisma.securityAuditLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SecurityAuditLogUpdateManyArgs>(args: SelectSubset<T, SecurityAuditLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SecurityAuditLogs and returns the data updated in the database.
     * @param {SecurityAuditLogUpdateManyAndReturnArgs} args - Arguments to update many SecurityAuditLogs.
     * @example
     * // Update many SecurityAuditLogs
     * const securityAuditLog = await prisma.securityAuditLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SecurityAuditLogs and only return the `id`
     * const securityAuditLogWithIdOnly = await prisma.securityAuditLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SecurityAuditLogUpdateManyAndReturnArgs>(args: SelectSubset<T, SecurityAuditLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SecurityAuditLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SecurityAuditLog.
     * @param {SecurityAuditLogUpsertArgs} args - Arguments to update or create a SecurityAuditLog.
     * @example
     * // Update or create a SecurityAuditLog
     * const securityAuditLog = await prisma.securityAuditLog.upsert({
     *   create: {
     *     // ... data to create a SecurityAuditLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SecurityAuditLog we want to update
     *   }
     * })
     */
    upsert<T extends SecurityAuditLogUpsertArgs>(args: SelectSubset<T, SecurityAuditLogUpsertArgs<ExtArgs>>): Prisma__SecurityAuditLogClient<$Result.GetResult<Prisma.$SecurityAuditLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SecurityAuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecurityAuditLogCountArgs} args - Arguments to filter SecurityAuditLogs to count.
     * @example
     * // Count the number of SecurityAuditLogs
     * const count = await prisma.securityAuditLog.count({
     *   where: {
     *     // ... the filter for the SecurityAuditLogs we want to count
     *   }
     * })
    **/
    count<T extends SecurityAuditLogCountArgs>(
      args?: Subset<T, SecurityAuditLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SecurityAuditLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SecurityAuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecurityAuditLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SecurityAuditLogAggregateArgs>(args: Subset<T, SecurityAuditLogAggregateArgs>): Prisma.PrismaPromise<GetSecurityAuditLogAggregateType<T>>

    /**
     * Group by SecurityAuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecurityAuditLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SecurityAuditLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SecurityAuditLogGroupByArgs['orderBy'] }
        : { orderBy?: SecurityAuditLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SecurityAuditLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSecurityAuditLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SecurityAuditLog model
   */
  readonly fields: SecurityAuditLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SecurityAuditLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SecurityAuditLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SecurityAuditLog model
   */
  interface SecurityAuditLogFieldRefs {
    readonly id: FieldRef<"SecurityAuditLog", 'String'>
    readonly userId: FieldRef<"SecurityAuditLog", 'String'>
    readonly action: FieldRef<"SecurityAuditLog", 'String'>
    readonly module: FieldRef<"SecurityAuditLog", 'String'>
    readonly ipAddress: FieldRef<"SecurityAuditLog", 'String'>
    readonly result: FieldRef<"SecurityAuditLog", 'String'>
    readonly timestamp: FieldRef<"SecurityAuditLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SecurityAuditLog findUnique
   */
  export type SecurityAuditLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityAuditLog
     */
    select?: SecurityAuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityAuditLog
     */
    omit?: SecurityAuditLogOmit<ExtArgs> | null
    /**
     * Filter, which SecurityAuditLog to fetch.
     */
    where: SecurityAuditLogWhereUniqueInput
  }

  /**
   * SecurityAuditLog findUniqueOrThrow
   */
  export type SecurityAuditLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityAuditLog
     */
    select?: SecurityAuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityAuditLog
     */
    omit?: SecurityAuditLogOmit<ExtArgs> | null
    /**
     * Filter, which SecurityAuditLog to fetch.
     */
    where: SecurityAuditLogWhereUniqueInput
  }

  /**
   * SecurityAuditLog findFirst
   */
  export type SecurityAuditLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityAuditLog
     */
    select?: SecurityAuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityAuditLog
     */
    omit?: SecurityAuditLogOmit<ExtArgs> | null
    /**
     * Filter, which SecurityAuditLog to fetch.
     */
    where?: SecurityAuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SecurityAuditLogs to fetch.
     */
    orderBy?: SecurityAuditLogOrderByWithRelationInput | SecurityAuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SecurityAuditLogs.
     */
    cursor?: SecurityAuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SecurityAuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SecurityAuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SecurityAuditLogs.
     */
    distinct?: SecurityAuditLogScalarFieldEnum | SecurityAuditLogScalarFieldEnum[]
  }

  /**
   * SecurityAuditLog findFirstOrThrow
   */
  export type SecurityAuditLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityAuditLog
     */
    select?: SecurityAuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityAuditLog
     */
    omit?: SecurityAuditLogOmit<ExtArgs> | null
    /**
     * Filter, which SecurityAuditLog to fetch.
     */
    where?: SecurityAuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SecurityAuditLogs to fetch.
     */
    orderBy?: SecurityAuditLogOrderByWithRelationInput | SecurityAuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SecurityAuditLogs.
     */
    cursor?: SecurityAuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SecurityAuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SecurityAuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SecurityAuditLogs.
     */
    distinct?: SecurityAuditLogScalarFieldEnum | SecurityAuditLogScalarFieldEnum[]
  }

  /**
   * SecurityAuditLog findMany
   */
  export type SecurityAuditLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityAuditLog
     */
    select?: SecurityAuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityAuditLog
     */
    omit?: SecurityAuditLogOmit<ExtArgs> | null
    /**
     * Filter, which SecurityAuditLogs to fetch.
     */
    where?: SecurityAuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SecurityAuditLogs to fetch.
     */
    orderBy?: SecurityAuditLogOrderByWithRelationInput | SecurityAuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SecurityAuditLogs.
     */
    cursor?: SecurityAuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SecurityAuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SecurityAuditLogs.
     */
    skip?: number
    distinct?: SecurityAuditLogScalarFieldEnum | SecurityAuditLogScalarFieldEnum[]
  }

  /**
   * SecurityAuditLog create
   */
  export type SecurityAuditLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityAuditLog
     */
    select?: SecurityAuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityAuditLog
     */
    omit?: SecurityAuditLogOmit<ExtArgs> | null
    /**
     * The data needed to create a SecurityAuditLog.
     */
    data: XOR<SecurityAuditLogCreateInput, SecurityAuditLogUncheckedCreateInput>
  }

  /**
   * SecurityAuditLog createMany
   */
  export type SecurityAuditLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SecurityAuditLogs.
     */
    data: SecurityAuditLogCreateManyInput | SecurityAuditLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SecurityAuditLog createManyAndReturn
   */
  export type SecurityAuditLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityAuditLog
     */
    select?: SecurityAuditLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityAuditLog
     */
    omit?: SecurityAuditLogOmit<ExtArgs> | null
    /**
     * The data used to create many SecurityAuditLogs.
     */
    data: SecurityAuditLogCreateManyInput | SecurityAuditLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SecurityAuditLog update
   */
  export type SecurityAuditLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityAuditLog
     */
    select?: SecurityAuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityAuditLog
     */
    omit?: SecurityAuditLogOmit<ExtArgs> | null
    /**
     * The data needed to update a SecurityAuditLog.
     */
    data: XOR<SecurityAuditLogUpdateInput, SecurityAuditLogUncheckedUpdateInput>
    /**
     * Choose, which SecurityAuditLog to update.
     */
    where: SecurityAuditLogWhereUniqueInput
  }

  /**
   * SecurityAuditLog updateMany
   */
  export type SecurityAuditLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SecurityAuditLogs.
     */
    data: XOR<SecurityAuditLogUpdateManyMutationInput, SecurityAuditLogUncheckedUpdateManyInput>
    /**
     * Filter which SecurityAuditLogs to update
     */
    where?: SecurityAuditLogWhereInput
    /**
     * Limit how many SecurityAuditLogs to update.
     */
    limit?: number
  }

  /**
   * SecurityAuditLog updateManyAndReturn
   */
  export type SecurityAuditLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityAuditLog
     */
    select?: SecurityAuditLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityAuditLog
     */
    omit?: SecurityAuditLogOmit<ExtArgs> | null
    /**
     * The data used to update SecurityAuditLogs.
     */
    data: XOR<SecurityAuditLogUpdateManyMutationInput, SecurityAuditLogUncheckedUpdateManyInput>
    /**
     * Filter which SecurityAuditLogs to update
     */
    where?: SecurityAuditLogWhereInput
    /**
     * Limit how many SecurityAuditLogs to update.
     */
    limit?: number
  }

  /**
   * SecurityAuditLog upsert
   */
  export type SecurityAuditLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityAuditLog
     */
    select?: SecurityAuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityAuditLog
     */
    omit?: SecurityAuditLogOmit<ExtArgs> | null
    /**
     * The filter to search for the SecurityAuditLog to update in case it exists.
     */
    where: SecurityAuditLogWhereUniqueInput
    /**
     * In case the SecurityAuditLog found by the `where` argument doesn't exist, create a new SecurityAuditLog with this data.
     */
    create: XOR<SecurityAuditLogCreateInput, SecurityAuditLogUncheckedCreateInput>
    /**
     * In case the SecurityAuditLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SecurityAuditLogUpdateInput, SecurityAuditLogUncheckedUpdateInput>
  }

  /**
   * SecurityAuditLog delete
   */
  export type SecurityAuditLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityAuditLog
     */
    select?: SecurityAuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityAuditLog
     */
    omit?: SecurityAuditLogOmit<ExtArgs> | null
    /**
     * Filter which SecurityAuditLog to delete.
     */
    where: SecurityAuditLogWhereUniqueInput
  }

  /**
   * SecurityAuditLog deleteMany
   */
  export type SecurityAuditLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SecurityAuditLogs to delete
     */
    where?: SecurityAuditLogWhereInput
    /**
     * Limit how many SecurityAuditLogs to delete.
     */
    limit?: number
  }

  /**
   * SecurityAuditLog without action
   */
  export type SecurityAuditLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityAuditLog
     */
    select?: SecurityAuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityAuditLog
     */
    omit?: SecurityAuditLogOmit<ExtArgs> | null
  }


  /**
   * Model CompanyProfile
   */

  export type AggregateCompanyProfile = {
    _count: CompanyProfileCountAggregateOutputType | null
    _avg: CompanyProfileAvgAggregateOutputType | null
    _sum: CompanyProfileSumAggregateOutputType | null
    _min: CompanyProfileMinAggregateOutputType | null
    _max: CompanyProfileMaxAggregateOutputType | null
  }

  export type CompanyProfileAvgAggregateOutputType = {
    founded: number | null
  }

  export type CompanyProfileSumAggregateOutputType = {
    founded: number | null
  }

  export type CompanyProfileMinAggregateOutputType = {
    id: string | null
    name: string | null
    legalName: string | null
    industry: string | null
    size: string | null
    hq: string | null
    founded: number | null
    website: string | null
    supportEmail: string | null
    updatedAt: Date | null
  }

  export type CompanyProfileMaxAggregateOutputType = {
    id: string | null
    name: string | null
    legalName: string | null
    industry: string | null
    size: string | null
    hq: string | null
    founded: number | null
    website: string | null
    supportEmail: string | null
    updatedAt: Date | null
  }

  export type CompanyProfileCountAggregateOutputType = {
    id: number
    name: number
    legalName: number
    industry: number
    size: number
    hq: number
    founded: number
    website: number
    supportEmail: number
    branding: number
    compliance: number
    deploymentPolicies: number
    aiGovernance: number
    updatedAt: number
    _all: number
  }


  export type CompanyProfileAvgAggregateInputType = {
    founded?: true
  }

  export type CompanyProfileSumAggregateInputType = {
    founded?: true
  }

  export type CompanyProfileMinAggregateInputType = {
    id?: true
    name?: true
    legalName?: true
    industry?: true
    size?: true
    hq?: true
    founded?: true
    website?: true
    supportEmail?: true
    updatedAt?: true
  }

  export type CompanyProfileMaxAggregateInputType = {
    id?: true
    name?: true
    legalName?: true
    industry?: true
    size?: true
    hq?: true
    founded?: true
    website?: true
    supportEmail?: true
    updatedAt?: true
  }

  export type CompanyProfileCountAggregateInputType = {
    id?: true
    name?: true
    legalName?: true
    industry?: true
    size?: true
    hq?: true
    founded?: true
    website?: true
    supportEmail?: true
    branding?: true
    compliance?: true
    deploymentPolicies?: true
    aiGovernance?: true
    updatedAt?: true
    _all?: true
  }

  export type CompanyProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompanyProfile to aggregate.
     */
    where?: CompanyProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanyProfiles to fetch.
     */
    orderBy?: CompanyProfileOrderByWithRelationInput | CompanyProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompanyProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanyProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanyProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CompanyProfiles
    **/
    _count?: true | CompanyProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CompanyProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CompanyProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompanyProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompanyProfileMaxAggregateInputType
  }

  export type GetCompanyProfileAggregateType<T extends CompanyProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateCompanyProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompanyProfile[P]>
      : GetScalarType<T[P], AggregateCompanyProfile[P]>
  }




  export type CompanyProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanyProfileWhereInput
    orderBy?: CompanyProfileOrderByWithAggregationInput | CompanyProfileOrderByWithAggregationInput[]
    by: CompanyProfileScalarFieldEnum[] | CompanyProfileScalarFieldEnum
    having?: CompanyProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompanyProfileCountAggregateInputType | true
    _avg?: CompanyProfileAvgAggregateInputType
    _sum?: CompanyProfileSumAggregateInputType
    _min?: CompanyProfileMinAggregateInputType
    _max?: CompanyProfileMaxAggregateInputType
  }

  export type CompanyProfileGroupByOutputType = {
    id: string
    name: string
    legalName: string | null
    industry: string | null
    size: string | null
    hq: string | null
    founded: number | null
    website: string | null
    supportEmail: string | null
    branding: JsonValue | null
    compliance: JsonValue | null
    deploymentPolicies: JsonValue | null
    aiGovernance: JsonValue | null
    updatedAt: Date
    _count: CompanyProfileCountAggregateOutputType | null
    _avg: CompanyProfileAvgAggregateOutputType | null
    _sum: CompanyProfileSumAggregateOutputType | null
    _min: CompanyProfileMinAggregateOutputType | null
    _max: CompanyProfileMaxAggregateOutputType | null
  }

  type GetCompanyProfileGroupByPayload<T extends CompanyProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompanyProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompanyProfileGroupByOutputType[P]>
            : GetScalarType<T[P], CompanyProfileGroupByOutputType[P]>
        }
      >
    >


  export type CompanyProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    legalName?: boolean
    industry?: boolean
    size?: boolean
    hq?: boolean
    founded?: boolean
    website?: boolean
    supportEmail?: boolean
    branding?: boolean
    compliance?: boolean
    deploymentPolicies?: boolean
    aiGovernance?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["companyProfile"]>

  export type CompanyProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    legalName?: boolean
    industry?: boolean
    size?: boolean
    hq?: boolean
    founded?: boolean
    website?: boolean
    supportEmail?: boolean
    branding?: boolean
    compliance?: boolean
    deploymentPolicies?: boolean
    aiGovernance?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["companyProfile"]>

  export type CompanyProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    legalName?: boolean
    industry?: boolean
    size?: boolean
    hq?: boolean
    founded?: boolean
    website?: boolean
    supportEmail?: boolean
    branding?: boolean
    compliance?: boolean
    deploymentPolicies?: boolean
    aiGovernance?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["companyProfile"]>

  export type CompanyProfileSelectScalar = {
    id?: boolean
    name?: boolean
    legalName?: boolean
    industry?: boolean
    size?: boolean
    hq?: boolean
    founded?: boolean
    website?: boolean
    supportEmail?: boolean
    branding?: boolean
    compliance?: boolean
    deploymentPolicies?: boolean
    aiGovernance?: boolean
    updatedAt?: boolean
  }

  export type CompanyProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "legalName" | "industry" | "size" | "hq" | "founded" | "website" | "supportEmail" | "branding" | "compliance" | "deploymentPolicies" | "aiGovernance" | "updatedAt", ExtArgs["result"]["companyProfile"]>

  export type $CompanyProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CompanyProfile"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      legalName: string | null
      industry: string | null
      size: string | null
      hq: string | null
      founded: number | null
      website: string | null
      supportEmail: string | null
      branding: Prisma.JsonValue | null
      compliance: Prisma.JsonValue | null
      deploymentPolicies: Prisma.JsonValue | null
      aiGovernance: Prisma.JsonValue | null
      updatedAt: Date
    }, ExtArgs["result"]["companyProfile"]>
    composites: {}
  }

  type CompanyProfileGetPayload<S extends boolean | null | undefined | CompanyProfileDefaultArgs> = $Result.GetResult<Prisma.$CompanyProfilePayload, S>

  type CompanyProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompanyProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompanyProfileCountAggregateInputType | true
    }

  export interface CompanyProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CompanyProfile'], meta: { name: 'CompanyProfile' } }
    /**
     * Find zero or one CompanyProfile that matches the filter.
     * @param {CompanyProfileFindUniqueArgs} args - Arguments to find a CompanyProfile
     * @example
     * // Get one CompanyProfile
     * const companyProfile = await prisma.companyProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompanyProfileFindUniqueArgs>(args: SelectSubset<T, CompanyProfileFindUniqueArgs<ExtArgs>>): Prisma__CompanyProfileClient<$Result.GetResult<Prisma.$CompanyProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CompanyProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompanyProfileFindUniqueOrThrowArgs} args - Arguments to find a CompanyProfile
     * @example
     * // Get one CompanyProfile
     * const companyProfile = await prisma.companyProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompanyProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, CompanyProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompanyProfileClient<$Result.GetResult<Prisma.$CompanyProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CompanyProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyProfileFindFirstArgs} args - Arguments to find a CompanyProfile
     * @example
     * // Get one CompanyProfile
     * const companyProfile = await prisma.companyProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompanyProfileFindFirstArgs>(args?: SelectSubset<T, CompanyProfileFindFirstArgs<ExtArgs>>): Prisma__CompanyProfileClient<$Result.GetResult<Prisma.$CompanyProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CompanyProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyProfileFindFirstOrThrowArgs} args - Arguments to find a CompanyProfile
     * @example
     * // Get one CompanyProfile
     * const companyProfile = await prisma.companyProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompanyProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, CompanyProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompanyProfileClient<$Result.GetResult<Prisma.$CompanyProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CompanyProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CompanyProfiles
     * const companyProfiles = await prisma.companyProfile.findMany()
     * 
     * // Get first 10 CompanyProfiles
     * const companyProfiles = await prisma.companyProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const companyProfileWithIdOnly = await prisma.companyProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompanyProfileFindManyArgs>(args?: SelectSubset<T, CompanyProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CompanyProfile.
     * @param {CompanyProfileCreateArgs} args - Arguments to create a CompanyProfile.
     * @example
     * // Create one CompanyProfile
     * const CompanyProfile = await prisma.companyProfile.create({
     *   data: {
     *     // ... data to create a CompanyProfile
     *   }
     * })
     * 
     */
    create<T extends CompanyProfileCreateArgs>(args: SelectSubset<T, CompanyProfileCreateArgs<ExtArgs>>): Prisma__CompanyProfileClient<$Result.GetResult<Prisma.$CompanyProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CompanyProfiles.
     * @param {CompanyProfileCreateManyArgs} args - Arguments to create many CompanyProfiles.
     * @example
     * // Create many CompanyProfiles
     * const companyProfile = await prisma.companyProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompanyProfileCreateManyArgs>(args?: SelectSubset<T, CompanyProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CompanyProfiles and returns the data saved in the database.
     * @param {CompanyProfileCreateManyAndReturnArgs} args - Arguments to create many CompanyProfiles.
     * @example
     * // Create many CompanyProfiles
     * const companyProfile = await prisma.companyProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CompanyProfiles and only return the `id`
     * const companyProfileWithIdOnly = await prisma.companyProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CompanyProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, CompanyProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CompanyProfile.
     * @param {CompanyProfileDeleteArgs} args - Arguments to delete one CompanyProfile.
     * @example
     * // Delete one CompanyProfile
     * const CompanyProfile = await prisma.companyProfile.delete({
     *   where: {
     *     // ... filter to delete one CompanyProfile
     *   }
     * })
     * 
     */
    delete<T extends CompanyProfileDeleteArgs>(args: SelectSubset<T, CompanyProfileDeleteArgs<ExtArgs>>): Prisma__CompanyProfileClient<$Result.GetResult<Prisma.$CompanyProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CompanyProfile.
     * @param {CompanyProfileUpdateArgs} args - Arguments to update one CompanyProfile.
     * @example
     * // Update one CompanyProfile
     * const companyProfile = await prisma.companyProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompanyProfileUpdateArgs>(args: SelectSubset<T, CompanyProfileUpdateArgs<ExtArgs>>): Prisma__CompanyProfileClient<$Result.GetResult<Prisma.$CompanyProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CompanyProfiles.
     * @param {CompanyProfileDeleteManyArgs} args - Arguments to filter CompanyProfiles to delete.
     * @example
     * // Delete a few CompanyProfiles
     * const { count } = await prisma.companyProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompanyProfileDeleteManyArgs>(args?: SelectSubset<T, CompanyProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CompanyProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CompanyProfiles
     * const companyProfile = await prisma.companyProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompanyProfileUpdateManyArgs>(args: SelectSubset<T, CompanyProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CompanyProfiles and returns the data updated in the database.
     * @param {CompanyProfileUpdateManyAndReturnArgs} args - Arguments to update many CompanyProfiles.
     * @example
     * // Update many CompanyProfiles
     * const companyProfile = await prisma.companyProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CompanyProfiles and only return the `id`
     * const companyProfileWithIdOnly = await prisma.companyProfile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CompanyProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, CompanyProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CompanyProfile.
     * @param {CompanyProfileUpsertArgs} args - Arguments to update or create a CompanyProfile.
     * @example
     * // Update or create a CompanyProfile
     * const companyProfile = await prisma.companyProfile.upsert({
     *   create: {
     *     // ... data to create a CompanyProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CompanyProfile we want to update
     *   }
     * })
     */
    upsert<T extends CompanyProfileUpsertArgs>(args: SelectSubset<T, CompanyProfileUpsertArgs<ExtArgs>>): Prisma__CompanyProfileClient<$Result.GetResult<Prisma.$CompanyProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CompanyProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyProfileCountArgs} args - Arguments to filter CompanyProfiles to count.
     * @example
     * // Count the number of CompanyProfiles
     * const count = await prisma.companyProfile.count({
     *   where: {
     *     // ... the filter for the CompanyProfiles we want to count
     *   }
     * })
    **/
    count<T extends CompanyProfileCountArgs>(
      args?: Subset<T, CompanyProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CompanyProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CompanyProfileAggregateArgs>(args: Subset<T, CompanyProfileAggregateArgs>): Prisma.PrismaPromise<GetCompanyProfileAggregateType<T>>

    /**
     * Group by CompanyProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CompanyProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompanyProfileGroupByArgs['orderBy'] }
        : { orderBy?: CompanyProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CompanyProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompanyProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CompanyProfile model
   */
  readonly fields: CompanyProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CompanyProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompanyProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CompanyProfile model
   */
  interface CompanyProfileFieldRefs {
    readonly id: FieldRef<"CompanyProfile", 'String'>
    readonly name: FieldRef<"CompanyProfile", 'String'>
    readonly legalName: FieldRef<"CompanyProfile", 'String'>
    readonly industry: FieldRef<"CompanyProfile", 'String'>
    readonly size: FieldRef<"CompanyProfile", 'String'>
    readonly hq: FieldRef<"CompanyProfile", 'String'>
    readonly founded: FieldRef<"CompanyProfile", 'Int'>
    readonly website: FieldRef<"CompanyProfile", 'String'>
    readonly supportEmail: FieldRef<"CompanyProfile", 'String'>
    readonly branding: FieldRef<"CompanyProfile", 'Json'>
    readonly compliance: FieldRef<"CompanyProfile", 'Json'>
    readonly deploymentPolicies: FieldRef<"CompanyProfile", 'Json'>
    readonly aiGovernance: FieldRef<"CompanyProfile", 'Json'>
    readonly updatedAt: FieldRef<"CompanyProfile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CompanyProfile findUnique
   */
  export type CompanyProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyProfile
     */
    select?: CompanyProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyProfile
     */
    omit?: CompanyProfileOmit<ExtArgs> | null
    /**
     * Filter, which CompanyProfile to fetch.
     */
    where: CompanyProfileWhereUniqueInput
  }

  /**
   * CompanyProfile findUniqueOrThrow
   */
  export type CompanyProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyProfile
     */
    select?: CompanyProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyProfile
     */
    omit?: CompanyProfileOmit<ExtArgs> | null
    /**
     * Filter, which CompanyProfile to fetch.
     */
    where: CompanyProfileWhereUniqueInput
  }

  /**
   * CompanyProfile findFirst
   */
  export type CompanyProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyProfile
     */
    select?: CompanyProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyProfile
     */
    omit?: CompanyProfileOmit<ExtArgs> | null
    /**
     * Filter, which CompanyProfile to fetch.
     */
    where?: CompanyProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanyProfiles to fetch.
     */
    orderBy?: CompanyProfileOrderByWithRelationInput | CompanyProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompanyProfiles.
     */
    cursor?: CompanyProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanyProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanyProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompanyProfiles.
     */
    distinct?: CompanyProfileScalarFieldEnum | CompanyProfileScalarFieldEnum[]
  }

  /**
   * CompanyProfile findFirstOrThrow
   */
  export type CompanyProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyProfile
     */
    select?: CompanyProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyProfile
     */
    omit?: CompanyProfileOmit<ExtArgs> | null
    /**
     * Filter, which CompanyProfile to fetch.
     */
    where?: CompanyProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanyProfiles to fetch.
     */
    orderBy?: CompanyProfileOrderByWithRelationInput | CompanyProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompanyProfiles.
     */
    cursor?: CompanyProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanyProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanyProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompanyProfiles.
     */
    distinct?: CompanyProfileScalarFieldEnum | CompanyProfileScalarFieldEnum[]
  }

  /**
   * CompanyProfile findMany
   */
  export type CompanyProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyProfile
     */
    select?: CompanyProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyProfile
     */
    omit?: CompanyProfileOmit<ExtArgs> | null
    /**
     * Filter, which CompanyProfiles to fetch.
     */
    where?: CompanyProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanyProfiles to fetch.
     */
    orderBy?: CompanyProfileOrderByWithRelationInput | CompanyProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CompanyProfiles.
     */
    cursor?: CompanyProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanyProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanyProfiles.
     */
    skip?: number
    distinct?: CompanyProfileScalarFieldEnum | CompanyProfileScalarFieldEnum[]
  }

  /**
   * CompanyProfile create
   */
  export type CompanyProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyProfile
     */
    select?: CompanyProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyProfile
     */
    omit?: CompanyProfileOmit<ExtArgs> | null
    /**
     * The data needed to create a CompanyProfile.
     */
    data: XOR<CompanyProfileCreateInput, CompanyProfileUncheckedCreateInput>
  }

  /**
   * CompanyProfile createMany
   */
  export type CompanyProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CompanyProfiles.
     */
    data: CompanyProfileCreateManyInput | CompanyProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CompanyProfile createManyAndReturn
   */
  export type CompanyProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyProfile
     */
    select?: CompanyProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyProfile
     */
    omit?: CompanyProfileOmit<ExtArgs> | null
    /**
     * The data used to create many CompanyProfiles.
     */
    data: CompanyProfileCreateManyInput | CompanyProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CompanyProfile update
   */
  export type CompanyProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyProfile
     */
    select?: CompanyProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyProfile
     */
    omit?: CompanyProfileOmit<ExtArgs> | null
    /**
     * The data needed to update a CompanyProfile.
     */
    data: XOR<CompanyProfileUpdateInput, CompanyProfileUncheckedUpdateInput>
    /**
     * Choose, which CompanyProfile to update.
     */
    where: CompanyProfileWhereUniqueInput
  }

  /**
   * CompanyProfile updateMany
   */
  export type CompanyProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CompanyProfiles.
     */
    data: XOR<CompanyProfileUpdateManyMutationInput, CompanyProfileUncheckedUpdateManyInput>
    /**
     * Filter which CompanyProfiles to update
     */
    where?: CompanyProfileWhereInput
    /**
     * Limit how many CompanyProfiles to update.
     */
    limit?: number
  }

  /**
   * CompanyProfile updateManyAndReturn
   */
  export type CompanyProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyProfile
     */
    select?: CompanyProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyProfile
     */
    omit?: CompanyProfileOmit<ExtArgs> | null
    /**
     * The data used to update CompanyProfiles.
     */
    data: XOR<CompanyProfileUpdateManyMutationInput, CompanyProfileUncheckedUpdateManyInput>
    /**
     * Filter which CompanyProfiles to update
     */
    where?: CompanyProfileWhereInput
    /**
     * Limit how many CompanyProfiles to update.
     */
    limit?: number
  }

  /**
   * CompanyProfile upsert
   */
  export type CompanyProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyProfile
     */
    select?: CompanyProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyProfile
     */
    omit?: CompanyProfileOmit<ExtArgs> | null
    /**
     * The filter to search for the CompanyProfile to update in case it exists.
     */
    where: CompanyProfileWhereUniqueInput
    /**
     * In case the CompanyProfile found by the `where` argument doesn't exist, create a new CompanyProfile with this data.
     */
    create: XOR<CompanyProfileCreateInput, CompanyProfileUncheckedCreateInput>
    /**
     * In case the CompanyProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompanyProfileUpdateInput, CompanyProfileUncheckedUpdateInput>
  }

  /**
   * CompanyProfile delete
   */
  export type CompanyProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyProfile
     */
    select?: CompanyProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyProfile
     */
    omit?: CompanyProfileOmit<ExtArgs> | null
    /**
     * Filter which CompanyProfile to delete.
     */
    where: CompanyProfileWhereUniqueInput
  }

  /**
   * CompanyProfile deleteMany
   */
  export type CompanyProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompanyProfiles to delete
     */
    where?: CompanyProfileWhereInput
    /**
     * Limit how many CompanyProfiles to delete.
     */
    limit?: number
  }

  /**
   * CompanyProfile without action
   */
  export type CompanyProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyProfile
     */
    select?: CompanyProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyProfile
     */
    omit?: CompanyProfileOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    passwordHash: 'passwordHash',
    roleId: 'roleId',
    teamId: 'teamId',
    status: 'status',
    joinedAt: 'joinedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const RoleScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    permissions: 'permissions',
    modulesAccess: 'modulesAccess',
    createdAt: 'createdAt'
  };

  export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum]


  export const TeamScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    memberCount: 'memberCount',
    leadId: 'leadId',
    parentTeamId: 'parentTeamId',
    createdAt: 'createdAt'
  };

  export type TeamScalarFieldEnum = (typeof TeamScalarFieldEnum)[keyof typeof TeamScalarFieldEnum]


  export const ActiveSessionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    device: 'device',
    location: 'location',
    ip: 'ip',
    tokenHash: 'tokenHash',
    status: 'status',
    loginTime: 'loginTime',
    expiresAt: 'expiresAt'
  };

  export type ActiveSessionScalarFieldEnum = (typeof ActiveSessionScalarFieldEnum)[keyof typeof ActiveSessionScalarFieldEnum]


  export const ApiKeyScalarFieldEnum: {
    id: 'id',
    name: 'name',
    keyHash: 'keyHash',
    keyIdDisplay: 'keyIdDisplay',
    scope: 'scope',
    ownerId: 'ownerId',
    environment: 'environment',
    permissions: 'permissions',
    status: 'status',
    createdDate: 'createdDate',
    expiryDate: 'expiryDate',
    lastUsed: 'lastUsed'
  };

  export type ApiKeyScalarFieldEnum = (typeof ApiKeyScalarFieldEnum)[keyof typeof ApiKeyScalarFieldEnum]


  export const KeyActivityLogScalarFieldEnum: {
    id: 'id',
    keyId: 'keyId',
    module: 'module',
    action: 'action',
    status: 'status',
    ipAddress: 'ipAddress',
    timestamp: 'timestamp'
  };

  export type KeyActivityLogScalarFieldEnum = (typeof KeyActivityLogScalarFieldEnum)[keyof typeof KeyActivityLogScalarFieldEnum]


  export const UserProfileExtScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    phone: 'phone',
    jobTitle: 'jobTitle',
    department: 'department',
    manager: 'manager',
    timezone: 'timezone',
    roleTier: 'roleTier',
    agentPreferences: 'agentPreferences',
    notificationPrefs: 'notificationPrefs',
    accessScopes: 'accessScopes',
    updatedAt: 'updatedAt'
  };

  export type UserProfileExtScalarFieldEnum = (typeof UserProfileExtScalarFieldEnum)[keyof typeof UserProfileExtScalarFieldEnum]


  export const ThemePreferenceScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    mode: 'mode',
    accentColor: 'accentColor',
    uiDensity: 'uiDensity',
    codeTheme: 'codeTheme',
    visualizationStyle: 'visualizationStyle',
    updatedAt: 'updatedAt'
  };

  export type ThemePreferenceScalarFieldEnum = (typeof ThemePreferenceScalarFieldEnum)[keyof typeof ThemePreferenceScalarFieldEnum]


  export const SecurityIncidentScalarFieldEnum: {
    id: 'id',
    type: 'type',
    severity: 'severity',
    module: 'module',
    status: 'status',
    timestamp: 'timestamp'
  };

  export type SecurityIncidentScalarFieldEnum = (typeof SecurityIncidentScalarFieldEnum)[keyof typeof SecurityIncidentScalarFieldEnum]


  export const SecurityAuditLogScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    action: 'action',
    module: 'module',
    ipAddress: 'ipAddress',
    result: 'result',
    timestamp: 'timestamp'
  };

  export type SecurityAuditLogScalarFieldEnum = (typeof SecurityAuditLogScalarFieldEnum)[keyof typeof SecurityAuditLogScalarFieldEnum]


  export const CompanyProfileScalarFieldEnum: {
    id: 'id',
    name: 'name',
    legalName: 'legalName',
    industry: 'industry',
    size: 'size',
    hq: 'hq',
    founded: 'founded',
    website: 'website',
    supportEmail: 'supportEmail',
    branding: 'branding',
    compliance: 'compliance',
    deploymentPolicies: 'deploymentPolicies',
    aiGovernance: 'aiGovernance',
    updatedAt: 'updatedAt'
  };

  export type CompanyProfileScalarFieldEnum = (typeof CompanyProfileScalarFieldEnum)[keyof typeof CompanyProfileScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'UserStatus'
   */
  export type EnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus'>
    


  /**
   * Reference to a field of type 'UserStatus[]'
   */
  export type ListEnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'SessionStatus'
   */
  export type EnumSessionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SessionStatus'>
    


  /**
   * Reference to a field of type 'SessionStatus[]'
   */
  export type ListEnumSessionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SessionStatus[]'>
    


  /**
   * Reference to a field of type 'ApiKeyStatus'
   */
  export type EnumApiKeyStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ApiKeyStatus'>
    


  /**
   * Reference to a field of type 'ApiKeyStatus[]'
   */
  export type ListEnumApiKeyStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ApiKeyStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    roleId?: StringNullableFilter<"User"> | string | null
    teamId?: StringNullableFilter<"User"> | string | null
    status?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
    joinedAt?: DateTimeFilter<"User"> | Date | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    role?: XOR<RoleNullableScalarRelationFilter, RoleWhereInput> | null
    team?: XOR<TeamNullableScalarRelationFilter, TeamWhereInput> | null
    apiKeys?: ApiKeyListRelationFilter
    sessions?: ActiveSessionListRelationFilter
    profileExt?: XOR<UserProfileExtNullableScalarRelationFilter, UserProfileExtWhereInput> | null
    themePrefs?: XOR<ThemePreferenceNullableScalarRelationFilter, ThemePreferenceWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    passwordHash?: SortOrder
    roleId?: SortOrderInput | SortOrder
    teamId?: SortOrderInput | SortOrder
    status?: SortOrder
    joinedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: RoleOrderByWithRelationInput
    team?: TeamOrderByWithRelationInput
    apiKeys?: ApiKeyOrderByRelationAggregateInput
    sessions?: ActiveSessionOrderByRelationAggregateInput
    profileExt?: UserProfileExtOrderByWithRelationInput
    themePrefs?: ThemePreferenceOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    roleId?: StringNullableFilter<"User"> | string | null
    teamId?: StringNullableFilter<"User"> | string | null
    status?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
    joinedAt?: DateTimeFilter<"User"> | Date | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    role?: XOR<RoleNullableScalarRelationFilter, RoleWhereInput> | null
    team?: XOR<TeamNullableScalarRelationFilter, TeamWhereInput> | null
    apiKeys?: ApiKeyListRelationFilter
    sessions?: ActiveSessionListRelationFilter
    profileExt?: XOR<UserProfileExtNullableScalarRelationFilter, UserProfileExtWhereInput> | null
    themePrefs?: XOR<ThemePreferenceNullableScalarRelationFilter, ThemePreferenceWhereInput> | null
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    passwordHash?: SortOrder
    roleId?: SortOrderInput | SortOrder
    teamId?: SortOrderInput | SortOrder
    status?: SortOrder
    joinedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    roleId?: StringNullableWithAggregatesFilter<"User"> | string | null
    teamId?: StringNullableWithAggregatesFilter<"User"> | string | null
    status?: EnumUserStatusWithAggregatesFilter<"User"> | $Enums.UserStatus
    joinedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type RoleWhereInput = {
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    id?: StringFilter<"Role"> | string
    name?: StringFilter<"Role"> | string
    description?: StringNullableFilter<"Role"> | string | null
    permissions?: JsonFilter<"Role">
    modulesAccess?: JsonFilter<"Role">
    createdAt?: DateTimeFilter<"Role"> | Date | string
    users?: UserListRelationFilter
  }

  export type RoleOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    permissions?: SortOrder
    modulesAccess?: SortOrder
    createdAt?: SortOrder
    users?: UserOrderByRelationAggregateInput
  }

  export type RoleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    description?: StringNullableFilter<"Role"> | string | null
    permissions?: JsonFilter<"Role">
    modulesAccess?: JsonFilter<"Role">
    createdAt?: DateTimeFilter<"Role"> | Date | string
    users?: UserListRelationFilter
  }, "id" | "name">

  export type RoleOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    permissions?: SortOrder
    modulesAccess?: SortOrder
    createdAt?: SortOrder
    _count?: RoleCountOrderByAggregateInput
    _max?: RoleMaxOrderByAggregateInput
    _min?: RoleMinOrderByAggregateInput
  }

  export type RoleScalarWhereWithAggregatesInput = {
    AND?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    OR?: RoleScalarWhereWithAggregatesInput[]
    NOT?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Role"> | string
    name?: StringWithAggregatesFilter<"Role"> | string
    description?: StringNullableWithAggregatesFilter<"Role"> | string | null
    permissions?: JsonWithAggregatesFilter<"Role">
    modulesAccess?: JsonWithAggregatesFilter<"Role">
    createdAt?: DateTimeWithAggregatesFilter<"Role"> | Date | string
  }

  export type TeamWhereInput = {
    AND?: TeamWhereInput | TeamWhereInput[]
    OR?: TeamWhereInput[]
    NOT?: TeamWhereInput | TeamWhereInput[]
    id?: StringFilter<"Team"> | string
    name?: StringFilter<"Team"> | string
    description?: StringNullableFilter<"Team"> | string | null
    memberCount?: IntFilter<"Team"> | number
    leadId?: StringNullableFilter<"Team"> | string | null
    parentTeamId?: StringNullableFilter<"Team"> | string | null
    createdAt?: DateTimeFilter<"Team"> | Date | string
    users?: UserListRelationFilter
  }

  export type TeamOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    memberCount?: SortOrder
    leadId?: SortOrderInput | SortOrder
    parentTeamId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    users?: UserOrderByRelationAggregateInput
  }

  export type TeamWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TeamWhereInput | TeamWhereInput[]
    OR?: TeamWhereInput[]
    NOT?: TeamWhereInput | TeamWhereInput[]
    name?: StringFilter<"Team"> | string
    description?: StringNullableFilter<"Team"> | string | null
    memberCount?: IntFilter<"Team"> | number
    leadId?: StringNullableFilter<"Team"> | string | null
    parentTeamId?: StringNullableFilter<"Team"> | string | null
    createdAt?: DateTimeFilter<"Team"> | Date | string
    users?: UserListRelationFilter
  }, "id">

  export type TeamOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    memberCount?: SortOrder
    leadId?: SortOrderInput | SortOrder
    parentTeamId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: TeamCountOrderByAggregateInput
    _avg?: TeamAvgOrderByAggregateInput
    _max?: TeamMaxOrderByAggregateInput
    _min?: TeamMinOrderByAggregateInput
    _sum?: TeamSumOrderByAggregateInput
  }

  export type TeamScalarWhereWithAggregatesInput = {
    AND?: TeamScalarWhereWithAggregatesInput | TeamScalarWhereWithAggregatesInput[]
    OR?: TeamScalarWhereWithAggregatesInput[]
    NOT?: TeamScalarWhereWithAggregatesInput | TeamScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Team"> | string
    name?: StringWithAggregatesFilter<"Team"> | string
    description?: StringNullableWithAggregatesFilter<"Team"> | string | null
    memberCount?: IntWithAggregatesFilter<"Team"> | number
    leadId?: StringNullableWithAggregatesFilter<"Team"> | string | null
    parentTeamId?: StringNullableWithAggregatesFilter<"Team"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Team"> | Date | string
  }

  export type ActiveSessionWhereInput = {
    AND?: ActiveSessionWhereInput | ActiveSessionWhereInput[]
    OR?: ActiveSessionWhereInput[]
    NOT?: ActiveSessionWhereInput | ActiveSessionWhereInput[]
    id?: StringFilter<"ActiveSession"> | string
    userId?: StringFilter<"ActiveSession"> | string
    device?: StringNullableFilter<"ActiveSession"> | string | null
    location?: StringNullableFilter<"ActiveSession"> | string | null
    ip?: StringNullableFilter<"ActiveSession"> | string | null
    tokenHash?: StringFilter<"ActiveSession"> | string
    status?: EnumSessionStatusFilter<"ActiveSession"> | $Enums.SessionStatus
    loginTime?: DateTimeFilter<"ActiveSession"> | Date | string
    expiresAt?: DateTimeFilter<"ActiveSession"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ActiveSessionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    device?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    ip?: SortOrderInput | SortOrder
    tokenHash?: SortOrder
    status?: SortOrder
    loginTime?: SortOrder
    expiresAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ActiveSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ActiveSessionWhereInput | ActiveSessionWhereInput[]
    OR?: ActiveSessionWhereInput[]
    NOT?: ActiveSessionWhereInput | ActiveSessionWhereInput[]
    userId?: StringFilter<"ActiveSession"> | string
    device?: StringNullableFilter<"ActiveSession"> | string | null
    location?: StringNullableFilter<"ActiveSession"> | string | null
    ip?: StringNullableFilter<"ActiveSession"> | string | null
    tokenHash?: StringFilter<"ActiveSession"> | string
    status?: EnumSessionStatusFilter<"ActiveSession"> | $Enums.SessionStatus
    loginTime?: DateTimeFilter<"ActiveSession"> | Date | string
    expiresAt?: DateTimeFilter<"ActiveSession"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ActiveSessionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    device?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    ip?: SortOrderInput | SortOrder
    tokenHash?: SortOrder
    status?: SortOrder
    loginTime?: SortOrder
    expiresAt?: SortOrder
    _count?: ActiveSessionCountOrderByAggregateInput
    _max?: ActiveSessionMaxOrderByAggregateInput
    _min?: ActiveSessionMinOrderByAggregateInput
  }

  export type ActiveSessionScalarWhereWithAggregatesInput = {
    AND?: ActiveSessionScalarWhereWithAggregatesInput | ActiveSessionScalarWhereWithAggregatesInput[]
    OR?: ActiveSessionScalarWhereWithAggregatesInput[]
    NOT?: ActiveSessionScalarWhereWithAggregatesInput | ActiveSessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ActiveSession"> | string
    userId?: StringWithAggregatesFilter<"ActiveSession"> | string
    device?: StringNullableWithAggregatesFilter<"ActiveSession"> | string | null
    location?: StringNullableWithAggregatesFilter<"ActiveSession"> | string | null
    ip?: StringNullableWithAggregatesFilter<"ActiveSession"> | string | null
    tokenHash?: StringWithAggregatesFilter<"ActiveSession"> | string
    status?: EnumSessionStatusWithAggregatesFilter<"ActiveSession"> | $Enums.SessionStatus
    loginTime?: DateTimeWithAggregatesFilter<"ActiveSession"> | Date | string
    expiresAt?: DateTimeWithAggregatesFilter<"ActiveSession"> | Date | string
  }

  export type ApiKeyWhereInput = {
    AND?: ApiKeyWhereInput | ApiKeyWhereInput[]
    OR?: ApiKeyWhereInput[]
    NOT?: ApiKeyWhereInput | ApiKeyWhereInput[]
    id?: StringFilter<"ApiKey"> | string
    name?: StringFilter<"ApiKey"> | string
    keyHash?: StringFilter<"ApiKey"> | string
    keyIdDisplay?: StringFilter<"ApiKey"> | string
    scope?: StringNullableFilter<"ApiKey"> | string | null
    ownerId?: StringFilter<"ApiKey"> | string
    environment?: StringFilter<"ApiKey"> | string
    permissions?: JsonFilter<"ApiKey">
    status?: EnumApiKeyStatusFilter<"ApiKey"> | $Enums.ApiKeyStatus
    createdDate?: DateTimeFilter<"ApiKey"> | Date | string
    expiryDate?: DateTimeNullableFilter<"ApiKey"> | Date | string | null
    lastUsed?: DateTimeNullableFilter<"ApiKey"> | Date | string | null
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    activityLogs?: KeyActivityLogListRelationFilter
  }

  export type ApiKeyOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    keyHash?: SortOrder
    keyIdDisplay?: SortOrder
    scope?: SortOrderInput | SortOrder
    ownerId?: SortOrder
    environment?: SortOrder
    permissions?: SortOrder
    status?: SortOrder
    createdDate?: SortOrder
    expiryDate?: SortOrderInput | SortOrder
    lastUsed?: SortOrderInput | SortOrder
    owner?: UserOrderByWithRelationInput
    activityLogs?: KeyActivityLogOrderByRelationAggregateInput
  }

  export type ApiKeyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    keyHash?: string
    AND?: ApiKeyWhereInput | ApiKeyWhereInput[]
    OR?: ApiKeyWhereInput[]
    NOT?: ApiKeyWhereInput | ApiKeyWhereInput[]
    name?: StringFilter<"ApiKey"> | string
    keyIdDisplay?: StringFilter<"ApiKey"> | string
    scope?: StringNullableFilter<"ApiKey"> | string | null
    ownerId?: StringFilter<"ApiKey"> | string
    environment?: StringFilter<"ApiKey"> | string
    permissions?: JsonFilter<"ApiKey">
    status?: EnumApiKeyStatusFilter<"ApiKey"> | $Enums.ApiKeyStatus
    createdDate?: DateTimeFilter<"ApiKey"> | Date | string
    expiryDate?: DateTimeNullableFilter<"ApiKey"> | Date | string | null
    lastUsed?: DateTimeNullableFilter<"ApiKey"> | Date | string | null
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    activityLogs?: KeyActivityLogListRelationFilter
  }, "id" | "keyHash">

  export type ApiKeyOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    keyHash?: SortOrder
    keyIdDisplay?: SortOrder
    scope?: SortOrderInput | SortOrder
    ownerId?: SortOrder
    environment?: SortOrder
    permissions?: SortOrder
    status?: SortOrder
    createdDate?: SortOrder
    expiryDate?: SortOrderInput | SortOrder
    lastUsed?: SortOrderInput | SortOrder
    _count?: ApiKeyCountOrderByAggregateInput
    _max?: ApiKeyMaxOrderByAggregateInput
    _min?: ApiKeyMinOrderByAggregateInput
  }

  export type ApiKeyScalarWhereWithAggregatesInput = {
    AND?: ApiKeyScalarWhereWithAggregatesInput | ApiKeyScalarWhereWithAggregatesInput[]
    OR?: ApiKeyScalarWhereWithAggregatesInput[]
    NOT?: ApiKeyScalarWhereWithAggregatesInput | ApiKeyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ApiKey"> | string
    name?: StringWithAggregatesFilter<"ApiKey"> | string
    keyHash?: StringWithAggregatesFilter<"ApiKey"> | string
    keyIdDisplay?: StringWithAggregatesFilter<"ApiKey"> | string
    scope?: StringNullableWithAggregatesFilter<"ApiKey"> | string | null
    ownerId?: StringWithAggregatesFilter<"ApiKey"> | string
    environment?: StringWithAggregatesFilter<"ApiKey"> | string
    permissions?: JsonWithAggregatesFilter<"ApiKey">
    status?: EnumApiKeyStatusWithAggregatesFilter<"ApiKey"> | $Enums.ApiKeyStatus
    createdDate?: DateTimeWithAggregatesFilter<"ApiKey"> | Date | string
    expiryDate?: DateTimeNullableWithAggregatesFilter<"ApiKey"> | Date | string | null
    lastUsed?: DateTimeNullableWithAggregatesFilter<"ApiKey"> | Date | string | null
  }

  export type KeyActivityLogWhereInput = {
    AND?: KeyActivityLogWhereInput | KeyActivityLogWhereInput[]
    OR?: KeyActivityLogWhereInput[]
    NOT?: KeyActivityLogWhereInput | KeyActivityLogWhereInput[]
    id?: StringFilter<"KeyActivityLog"> | string
    keyId?: StringFilter<"KeyActivityLog"> | string
    module?: StringFilter<"KeyActivityLog"> | string
    action?: StringFilter<"KeyActivityLog"> | string
    status?: StringFilter<"KeyActivityLog"> | string
    ipAddress?: StringNullableFilter<"KeyActivityLog"> | string | null
    timestamp?: DateTimeFilter<"KeyActivityLog"> | Date | string
    key?: XOR<ApiKeyScalarRelationFilter, ApiKeyWhereInput>
  }

  export type KeyActivityLogOrderByWithRelationInput = {
    id?: SortOrder
    keyId?: SortOrder
    module?: SortOrder
    action?: SortOrder
    status?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    timestamp?: SortOrder
    key?: ApiKeyOrderByWithRelationInput
  }

  export type KeyActivityLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: KeyActivityLogWhereInput | KeyActivityLogWhereInput[]
    OR?: KeyActivityLogWhereInput[]
    NOT?: KeyActivityLogWhereInput | KeyActivityLogWhereInput[]
    keyId?: StringFilter<"KeyActivityLog"> | string
    module?: StringFilter<"KeyActivityLog"> | string
    action?: StringFilter<"KeyActivityLog"> | string
    status?: StringFilter<"KeyActivityLog"> | string
    ipAddress?: StringNullableFilter<"KeyActivityLog"> | string | null
    timestamp?: DateTimeFilter<"KeyActivityLog"> | Date | string
    key?: XOR<ApiKeyScalarRelationFilter, ApiKeyWhereInput>
  }, "id">

  export type KeyActivityLogOrderByWithAggregationInput = {
    id?: SortOrder
    keyId?: SortOrder
    module?: SortOrder
    action?: SortOrder
    status?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    timestamp?: SortOrder
    _count?: KeyActivityLogCountOrderByAggregateInput
    _max?: KeyActivityLogMaxOrderByAggregateInput
    _min?: KeyActivityLogMinOrderByAggregateInput
  }

  export type KeyActivityLogScalarWhereWithAggregatesInput = {
    AND?: KeyActivityLogScalarWhereWithAggregatesInput | KeyActivityLogScalarWhereWithAggregatesInput[]
    OR?: KeyActivityLogScalarWhereWithAggregatesInput[]
    NOT?: KeyActivityLogScalarWhereWithAggregatesInput | KeyActivityLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"KeyActivityLog"> | string
    keyId?: StringWithAggregatesFilter<"KeyActivityLog"> | string
    module?: StringWithAggregatesFilter<"KeyActivityLog"> | string
    action?: StringWithAggregatesFilter<"KeyActivityLog"> | string
    status?: StringWithAggregatesFilter<"KeyActivityLog"> | string
    ipAddress?: StringNullableWithAggregatesFilter<"KeyActivityLog"> | string | null
    timestamp?: DateTimeWithAggregatesFilter<"KeyActivityLog"> | Date | string
  }

  export type UserProfileExtWhereInput = {
    AND?: UserProfileExtWhereInput | UserProfileExtWhereInput[]
    OR?: UserProfileExtWhereInput[]
    NOT?: UserProfileExtWhereInput | UserProfileExtWhereInput[]
    id?: StringFilter<"UserProfileExt"> | string
    userId?: StringFilter<"UserProfileExt"> | string
    phone?: StringNullableFilter<"UserProfileExt"> | string | null
    jobTitle?: StringNullableFilter<"UserProfileExt"> | string | null
    department?: StringNullableFilter<"UserProfileExt"> | string | null
    manager?: StringNullableFilter<"UserProfileExt"> | string | null
    timezone?: StringNullableFilter<"UserProfileExt"> | string | null
    roleTier?: StringNullableFilter<"UserProfileExt"> | string | null
    agentPreferences?: JsonFilter<"UserProfileExt">
    notificationPrefs?: JsonFilter<"UserProfileExt">
    accessScopes?: JsonFilter<"UserProfileExt">
    updatedAt?: DateTimeFilter<"UserProfileExt"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserProfileExtOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    phone?: SortOrderInput | SortOrder
    jobTitle?: SortOrderInput | SortOrder
    department?: SortOrderInput | SortOrder
    manager?: SortOrderInput | SortOrder
    timezone?: SortOrderInput | SortOrder
    roleTier?: SortOrderInput | SortOrder
    agentPreferences?: SortOrder
    notificationPrefs?: SortOrder
    accessScopes?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserProfileExtWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: UserProfileExtWhereInput | UserProfileExtWhereInput[]
    OR?: UserProfileExtWhereInput[]
    NOT?: UserProfileExtWhereInput | UserProfileExtWhereInput[]
    phone?: StringNullableFilter<"UserProfileExt"> | string | null
    jobTitle?: StringNullableFilter<"UserProfileExt"> | string | null
    department?: StringNullableFilter<"UserProfileExt"> | string | null
    manager?: StringNullableFilter<"UserProfileExt"> | string | null
    timezone?: StringNullableFilter<"UserProfileExt"> | string | null
    roleTier?: StringNullableFilter<"UserProfileExt"> | string | null
    agentPreferences?: JsonFilter<"UserProfileExt">
    notificationPrefs?: JsonFilter<"UserProfileExt">
    accessScopes?: JsonFilter<"UserProfileExt">
    updatedAt?: DateTimeFilter<"UserProfileExt"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type UserProfileExtOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    phone?: SortOrderInput | SortOrder
    jobTitle?: SortOrderInput | SortOrder
    department?: SortOrderInput | SortOrder
    manager?: SortOrderInput | SortOrder
    timezone?: SortOrderInput | SortOrder
    roleTier?: SortOrderInput | SortOrder
    agentPreferences?: SortOrder
    notificationPrefs?: SortOrder
    accessScopes?: SortOrder
    updatedAt?: SortOrder
    _count?: UserProfileExtCountOrderByAggregateInput
    _max?: UserProfileExtMaxOrderByAggregateInput
    _min?: UserProfileExtMinOrderByAggregateInput
  }

  export type UserProfileExtScalarWhereWithAggregatesInput = {
    AND?: UserProfileExtScalarWhereWithAggregatesInput | UserProfileExtScalarWhereWithAggregatesInput[]
    OR?: UserProfileExtScalarWhereWithAggregatesInput[]
    NOT?: UserProfileExtScalarWhereWithAggregatesInput | UserProfileExtScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserProfileExt"> | string
    userId?: StringWithAggregatesFilter<"UserProfileExt"> | string
    phone?: StringNullableWithAggregatesFilter<"UserProfileExt"> | string | null
    jobTitle?: StringNullableWithAggregatesFilter<"UserProfileExt"> | string | null
    department?: StringNullableWithAggregatesFilter<"UserProfileExt"> | string | null
    manager?: StringNullableWithAggregatesFilter<"UserProfileExt"> | string | null
    timezone?: StringNullableWithAggregatesFilter<"UserProfileExt"> | string | null
    roleTier?: StringNullableWithAggregatesFilter<"UserProfileExt"> | string | null
    agentPreferences?: JsonWithAggregatesFilter<"UserProfileExt">
    notificationPrefs?: JsonWithAggregatesFilter<"UserProfileExt">
    accessScopes?: JsonWithAggregatesFilter<"UserProfileExt">
    updatedAt?: DateTimeWithAggregatesFilter<"UserProfileExt"> | Date | string
  }

  export type ThemePreferenceWhereInput = {
    AND?: ThemePreferenceWhereInput | ThemePreferenceWhereInput[]
    OR?: ThemePreferenceWhereInput[]
    NOT?: ThemePreferenceWhereInput | ThemePreferenceWhereInput[]
    id?: StringFilter<"ThemePreference"> | string
    userId?: StringFilter<"ThemePreference"> | string
    mode?: StringFilter<"ThemePreference"> | string
    accentColor?: StringNullableFilter<"ThemePreference"> | string | null
    uiDensity?: StringNullableFilter<"ThemePreference"> | string | null
    codeTheme?: StringNullableFilter<"ThemePreference"> | string | null
    visualizationStyle?: StringNullableFilter<"ThemePreference"> | string | null
    updatedAt?: DateTimeFilter<"ThemePreference"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ThemePreferenceOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    mode?: SortOrder
    accentColor?: SortOrderInput | SortOrder
    uiDensity?: SortOrderInput | SortOrder
    codeTheme?: SortOrderInput | SortOrder
    visualizationStyle?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ThemePreferenceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: ThemePreferenceWhereInput | ThemePreferenceWhereInput[]
    OR?: ThemePreferenceWhereInput[]
    NOT?: ThemePreferenceWhereInput | ThemePreferenceWhereInput[]
    mode?: StringFilter<"ThemePreference"> | string
    accentColor?: StringNullableFilter<"ThemePreference"> | string | null
    uiDensity?: StringNullableFilter<"ThemePreference"> | string | null
    codeTheme?: StringNullableFilter<"ThemePreference"> | string | null
    visualizationStyle?: StringNullableFilter<"ThemePreference"> | string | null
    updatedAt?: DateTimeFilter<"ThemePreference"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type ThemePreferenceOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    mode?: SortOrder
    accentColor?: SortOrderInput | SortOrder
    uiDensity?: SortOrderInput | SortOrder
    codeTheme?: SortOrderInput | SortOrder
    visualizationStyle?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    _count?: ThemePreferenceCountOrderByAggregateInput
    _max?: ThemePreferenceMaxOrderByAggregateInput
    _min?: ThemePreferenceMinOrderByAggregateInput
  }

  export type ThemePreferenceScalarWhereWithAggregatesInput = {
    AND?: ThemePreferenceScalarWhereWithAggregatesInput | ThemePreferenceScalarWhereWithAggregatesInput[]
    OR?: ThemePreferenceScalarWhereWithAggregatesInput[]
    NOT?: ThemePreferenceScalarWhereWithAggregatesInput | ThemePreferenceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ThemePreference"> | string
    userId?: StringWithAggregatesFilter<"ThemePreference"> | string
    mode?: StringWithAggregatesFilter<"ThemePreference"> | string
    accentColor?: StringNullableWithAggregatesFilter<"ThemePreference"> | string | null
    uiDensity?: StringNullableWithAggregatesFilter<"ThemePreference"> | string | null
    codeTheme?: StringNullableWithAggregatesFilter<"ThemePreference"> | string | null
    visualizationStyle?: StringNullableWithAggregatesFilter<"ThemePreference"> | string | null
    updatedAt?: DateTimeWithAggregatesFilter<"ThemePreference"> | Date | string
  }

  export type SecurityIncidentWhereInput = {
    AND?: SecurityIncidentWhereInput | SecurityIncidentWhereInput[]
    OR?: SecurityIncidentWhereInput[]
    NOT?: SecurityIncidentWhereInput | SecurityIncidentWhereInput[]
    id?: StringFilter<"SecurityIncident"> | string
    type?: StringFilter<"SecurityIncident"> | string
    severity?: StringFilter<"SecurityIncident"> | string
    module?: StringNullableFilter<"SecurityIncident"> | string | null
    status?: StringFilter<"SecurityIncident"> | string
    timestamp?: DateTimeFilter<"SecurityIncident"> | Date | string
  }

  export type SecurityIncidentOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    severity?: SortOrder
    module?: SortOrderInput | SortOrder
    status?: SortOrder
    timestamp?: SortOrder
  }

  export type SecurityIncidentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SecurityIncidentWhereInput | SecurityIncidentWhereInput[]
    OR?: SecurityIncidentWhereInput[]
    NOT?: SecurityIncidentWhereInput | SecurityIncidentWhereInput[]
    type?: StringFilter<"SecurityIncident"> | string
    severity?: StringFilter<"SecurityIncident"> | string
    module?: StringNullableFilter<"SecurityIncident"> | string | null
    status?: StringFilter<"SecurityIncident"> | string
    timestamp?: DateTimeFilter<"SecurityIncident"> | Date | string
  }, "id">

  export type SecurityIncidentOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    severity?: SortOrder
    module?: SortOrderInput | SortOrder
    status?: SortOrder
    timestamp?: SortOrder
    _count?: SecurityIncidentCountOrderByAggregateInput
    _max?: SecurityIncidentMaxOrderByAggregateInput
    _min?: SecurityIncidentMinOrderByAggregateInput
  }

  export type SecurityIncidentScalarWhereWithAggregatesInput = {
    AND?: SecurityIncidentScalarWhereWithAggregatesInput | SecurityIncidentScalarWhereWithAggregatesInput[]
    OR?: SecurityIncidentScalarWhereWithAggregatesInput[]
    NOT?: SecurityIncidentScalarWhereWithAggregatesInput | SecurityIncidentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SecurityIncident"> | string
    type?: StringWithAggregatesFilter<"SecurityIncident"> | string
    severity?: StringWithAggregatesFilter<"SecurityIncident"> | string
    module?: StringNullableWithAggregatesFilter<"SecurityIncident"> | string | null
    status?: StringWithAggregatesFilter<"SecurityIncident"> | string
    timestamp?: DateTimeWithAggregatesFilter<"SecurityIncident"> | Date | string
  }

  export type SecurityAuditLogWhereInput = {
    AND?: SecurityAuditLogWhereInput | SecurityAuditLogWhereInput[]
    OR?: SecurityAuditLogWhereInput[]
    NOT?: SecurityAuditLogWhereInput | SecurityAuditLogWhereInput[]
    id?: StringFilter<"SecurityAuditLog"> | string
    userId?: StringNullableFilter<"SecurityAuditLog"> | string | null
    action?: StringFilter<"SecurityAuditLog"> | string
    module?: StringNullableFilter<"SecurityAuditLog"> | string | null
    ipAddress?: StringNullableFilter<"SecurityAuditLog"> | string | null
    result?: StringNullableFilter<"SecurityAuditLog"> | string | null
    timestamp?: DateTimeFilter<"SecurityAuditLog"> | Date | string
  }

  export type SecurityAuditLogOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    action?: SortOrder
    module?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    result?: SortOrderInput | SortOrder
    timestamp?: SortOrder
  }

  export type SecurityAuditLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SecurityAuditLogWhereInput | SecurityAuditLogWhereInput[]
    OR?: SecurityAuditLogWhereInput[]
    NOT?: SecurityAuditLogWhereInput | SecurityAuditLogWhereInput[]
    userId?: StringNullableFilter<"SecurityAuditLog"> | string | null
    action?: StringFilter<"SecurityAuditLog"> | string
    module?: StringNullableFilter<"SecurityAuditLog"> | string | null
    ipAddress?: StringNullableFilter<"SecurityAuditLog"> | string | null
    result?: StringNullableFilter<"SecurityAuditLog"> | string | null
    timestamp?: DateTimeFilter<"SecurityAuditLog"> | Date | string
  }, "id">

  export type SecurityAuditLogOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    action?: SortOrder
    module?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    result?: SortOrderInput | SortOrder
    timestamp?: SortOrder
    _count?: SecurityAuditLogCountOrderByAggregateInput
    _max?: SecurityAuditLogMaxOrderByAggregateInput
    _min?: SecurityAuditLogMinOrderByAggregateInput
  }

  export type SecurityAuditLogScalarWhereWithAggregatesInput = {
    AND?: SecurityAuditLogScalarWhereWithAggregatesInput | SecurityAuditLogScalarWhereWithAggregatesInput[]
    OR?: SecurityAuditLogScalarWhereWithAggregatesInput[]
    NOT?: SecurityAuditLogScalarWhereWithAggregatesInput | SecurityAuditLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SecurityAuditLog"> | string
    userId?: StringNullableWithAggregatesFilter<"SecurityAuditLog"> | string | null
    action?: StringWithAggregatesFilter<"SecurityAuditLog"> | string
    module?: StringNullableWithAggregatesFilter<"SecurityAuditLog"> | string | null
    ipAddress?: StringNullableWithAggregatesFilter<"SecurityAuditLog"> | string | null
    result?: StringNullableWithAggregatesFilter<"SecurityAuditLog"> | string | null
    timestamp?: DateTimeWithAggregatesFilter<"SecurityAuditLog"> | Date | string
  }

  export type CompanyProfileWhereInput = {
    AND?: CompanyProfileWhereInput | CompanyProfileWhereInput[]
    OR?: CompanyProfileWhereInput[]
    NOT?: CompanyProfileWhereInput | CompanyProfileWhereInput[]
    id?: StringFilter<"CompanyProfile"> | string
    name?: StringFilter<"CompanyProfile"> | string
    legalName?: StringNullableFilter<"CompanyProfile"> | string | null
    industry?: StringNullableFilter<"CompanyProfile"> | string | null
    size?: StringNullableFilter<"CompanyProfile"> | string | null
    hq?: StringNullableFilter<"CompanyProfile"> | string | null
    founded?: IntNullableFilter<"CompanyProfile"> | number | null
    website?: StringNullableFilter<"CompanyProfile"> | string | null
    supportEmail?: StringNullableFilter<"CompanyProfile"> | string | null
    branding?: JsonNullableFilter<"CompanyProfile">
    compliance?: JsonNullableFilter<"CompanyProfile">
    deploymentPolicies?: JsonNullableFilter<"CompanyProfile">
    aiGovernance?: JsonNullableFilter<"CompanyProfile">
    updatedAt?: DateTimeFilter<"CompanyProfile"> | Date | string
  }

  export type CompanyProfileOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    legalName?: SortOrderInput | SortOrder
    industry?: SortOrderInput | SortOrder
    size?: SortOrderInput | SortOrder
    hq?: SortOrderInput | SortOrder
    founded?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    supportEmail?: SortOrderInput | SortOrder
    branding?: SortOrderInput | SortOrder
    compliance?: SortOrderInput | SortOrder
    deploymentPolicies?: SortOrderInput | SortOrder
    aiGovernance?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
  }

  export type CompanyProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CompanyProfileWhereInput | CompanyProfileWhereInput[]
    OR?: CompanyProfileWhereInput[]
    NOT?: CompanyProfileWhereInput | CompanyProfileWhereInput[]
    name?: StringFilter<"CompanyProfile"> | string
    legalName?: StringNullableFilter<"CompanyProfile"> | string | null
    industry?: StringNullableFilter<"CompanyProfile"> | string | null
    size?: StringNullableFilter<"CompanyProfile"> | string | null
    hq?: StringNullableFilter<"CompanyProfile"> | string | null
    founded?: IntNullableFilter<"CompanyProfile"> | number | null
    website?: StringNullableFilter<"CompanyProfile"> | string | null
    supportEmail?: StringNullableFilter<"CompanyProfile"> | string | null
    branding?: JsonNullableFilter<"CompanyProfile">
    compliance?: JsonNullableFilter<"CompanyProfile">
    deploymentPolicies?: JsonNullableFilter<"CompanyProfile">
    aiGovernance?: JsonNullableFilter<"CompanyProfile">
    updatedAt?: DateTimeFilter<"CompanyProfile"> | Date | string
  }, "id">

  export type CompanyProfileOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    legalName?: SortOrderInput | SortOrder
    industry?: SortOrderInput | SortOrder
    size?: SortOrderInput | SortOrder
    hq?: SortOrderInput | SortOrder
    founded?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    supportEmail?: SortOrderInput | SortOrder
    branding?: SortOrderInput | SortOrder
    compliance?: SortOrderInput | SortOrder
    deploymentPolicies?: SortOrderInput | SortOrder
    aiGovernance?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    _count?: CompanyProfileCountOrderByAggregateInput
    _avg?: CompanyProfileAvgOrderByAggregateInput
    _max?: CompanyProfileMaxOrderByAggregateInput
    _min?: CompanyProfileMinOrderByAggregateInput
    _sum?: CompanyProfileSumOrderByAggregateInput
  }

  export type CompanyProfileScalarWhereWithAggregatesInput = {
    AND?: CompanyProfileScalarWhereWithAggregatesInput | CompanyProfileScalarWhereWithAggregatesInput[]
    OR?: CompanyProfileScalarWhereWithAggregatesInput[]
    NOT?: CompanyProfileScalarWhereWithAggregatesInput | CompanyProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CompanyProfile"> | string
    name?: StringWithAggregatesFilter<"CompanyProfile"> | string
    legalName?: StringNullableWithAggregatesFilter<"CompanyProfile"> | string | null
    industry?: StringNullableWithAggregatesFilter<"CompanyProfile"> | string | null
    size?: StringNullableWithAggregatesFilter<"CompanyProfile"> | string | null
    hq?: StringNullableWithAggregatesFilter<"CompanyProfile"> | string | null
    founded?: IntNullableWithAggregatesFilter<"CompanyProfile"> | number | null
    website?: StringNullableWithAggregatesFilter<"CompanyProfile"> | string | null
    supportEmail?: StringNullableWithAggregatesFilter<"CompanyProfile"> | string | null
    branding?: JsonNullableWithAggregatesFilter<"CompanyProfile">
    compliance?: JsonNullableWithAggregatesFilter<"CompanyProfile">
    deploymentPolicies?: JsonNullableWithAggregatesFilter<"CompanyProfile">
    aiGovernance?: JsonNullableWithAggregatesFilter<"CompanyProfile">
    updatedAt?: DateTimeWithAggregatesFilter<"CompanyProfile"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name: string
    passwordHash: string
    status?: $Enums.UserStatus
    joinedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: RoleCreateNestedOneWithoutUsersInput
    team?: TeamCreateNestedOneWithoutUsersInput
    apiKeys?: ApiKeyCreateNestedManyWithoutOwnerInput
    sessions?: ActiveSessionCreateNestedManyWithoutUserInput
    profileExt?: UserProfileExtCreateNestedOneWithoutUserInput
    themePrefs?: ThemePreferenceCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name: string
    passwordHash: string
    roleId?: string | null
    teamId?: string | null
    status?: $Enums.UserStatus
    joinedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    apiKeys?: ApiKeyUncheckedCreateNestedManyWithoutOwnerInput
    sessions?: ActiveSessionUncheckedCreateNestedManyWithoutUserInput
    profileExt?: UserProfileExtUncheckedCreateNestedOneWithoutUserInput
    themePrefs?: ThemePreferenceUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneWithoutUsersNestedInput
    team?: TeamUpdateOneWithoutUsersNestedInput
    apiKeys?: ApiKeyUpdateManyWithoutOwnerNestedInput
    sessions?: ActiveSessionUpdateManyWithoutUserNestedInput
    profileExt?: UserProfileExtUpdateOneWithoutUserNestedInput
    themePrefs?: ThemePreferenceUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    roleId?: NullableStringFieldUpdateOperationsInput | string | null
    teamId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    apiKeys?: ApiKeyUncheckedUpdateManyWithoutOwnerNestedInput
    sessions?: ActiveSessionUncheckedUpdateManyWithoutUserNestedInput
    profileExt?: UserProfileExtUncheckedUpdateOneWithoutUserNestedInput
    themePrefs?: ThemePreferenceUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name: string
    passwordHash: string
    roleId?: string | null
    teamId?: string | null
    status?: $Enums.UserStatus
    joinedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    roleId?: NullableStringFieldUpdateOperationsInput | string | null
    teamId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleCreateInput = {
    id?: string
    name: string
    description?: string | null
    permissions?: JsonNullValueInput | InputJsonValue
    modulesAccess?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    users?: UserCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    permissions?: JsonNullValueInput | InputJsonValue
    modulesAccess?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    permissions?: JsonNullValueInput | InputJsonValue
    modulesAccess?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    permissions?: JsonNullValueInput | InputJsonValue
    modulesAccess?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type RoleCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    permissions?: JsonNullValueInput | InputJsonValue
    modulesAccess?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type RoleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    permissions?: JsonNullValueInput | InputJsonValue
    modulesAccess?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    permissions?: JsonNullValueInput | InputJsonValue
    modulesAccess?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamCreateInput = {
    id?: string
    name: string
    description?: string | null
    memberCount?: number
    leadId?: string | null
    parentTeamId?: string | null
    createdAt?: Date | string
    users?: UserCreateNestedManyWithoutTeamInput
  }

  export type TeamUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    memberCount?: number
    leadId?: string | null
    parentTeamId?: string | null
    createdAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    memberCount?: IntFieldUpdateOperationsInput | number
    leadId?: NullableStringFieldUpdateOperationsInput | string | null
    parentTeamId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    memberCount?: IntFieldUpdateOperationsInput | number
    leadId?: NullableStringFieldUpdateOperationsInput | string | null
    parentTeamId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type TeamCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    memberCount?: number
    leadId?: string | null
    parentTeamId?: string | null
    createdAt?: Date | string
  }

  export type TeamUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    memberCount?: IntFieldUpdateOperationsInput | number
    leadId?: NullableStringFieldUpdateOperationsInput | string | null
    parentTeamId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    memberCount?: IntFieldUpdateOperationsInput | number
    leadId?: NullableStringFieldUpdateOperationsInput | string | null
    parentTeamId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActiveSessionCreateInput = {
    id?: string
    device?: string | null
    location?: string | null
    ip?: string | null
    tokenHash: string
    status?: $Enums.SessionStatus
    loginTime?: Date | string
    expiresAt: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type ActiveSessionUncheckedCreateInput = {
    id?: string
    userId: string
    device?: string | null
    location?: string | null
    ip?: string | null
    tokenHash: string
    status?: $Enums.SessionStatus
    loginTime?: Date | string
    expiresAt: Date | string
  }

  export type ActiveSessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    device?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    tokenHash?: StringFieldUpdateOperationsInput | string
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    loginTime?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type ActiveSessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    device?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    tokenHash?: StringFieldUpdateOperationsInput | string
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    loginTime?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActiveSessionCreateManyInput = {
    id?: string
    userId: string
    device?: string | null
    location?: string | null
    ip?: string | null
    tokenHash: string
    status?: $Enums.SessionStatus
    loginTime?: Date | string
    expiresAt: Date | string
  }

  export type ActiveSessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    device?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    tokenHash?: StringFieldUpdateOperationsInput | string
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    loginTime?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActiveSessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    device?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    tokenHash?: StringFieldUpdateOperationsInput | string
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    loginTime?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiKeyCreateInput = {
    id?: string
    name: string
    keyHash: string
    keyIdDisplay: string
    scope?: string | null
    environment?: string
    permissions?: JsonNullValueInput | InputJsonValue
    status?: $Enums.ApiKeyStatus
    createdDate?: Date | string
    expiryDate?: Date | string | null
    lastUsed?: Date | string | null
    owner: UserCreateNestedOneWithoutApiKeysInput
    activityLogs?: KeyActivityLogCreateNestedManyWithoutKeyInput
  }

  export type ApiKeyUncheckedCreateInput = {
    id?: string
    name: string
    keyHash: string
    keyIdDisplay: string
    scope?: string | null
    ownerId: string
    environment?: string
    permissions?: JsonNullValueInput | InputJsonValue
    status?: $Enums.ApiKeyStatus
    createdDate?: Date | string
    expiryDate?: Date | string | null
    lastUsed?: Date | string | null
    activityLogs?: KeyActivityLogUncheckedCreateNestedManyWithoutKeyInput
  }

  export type ApiKeyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    keyHash?: StringFieldUpdateOperationsInput | string
    keyIdDisplay?: StringFieldUpdateOperationsInput | string
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    environment?: StringFieldUpdateOperationsInput | string
    permissions?: JsonNullValueInput | InputJsonValue
    status?: EnumApiKeyStatusFieldUpdateOperationsInput | $Enums.ApiKeyStatus
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastUsed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    owner?: UserUpdateOneRequiredWithoutApiKeysNestedInput
    activityLogs?: KeyActivityLogUpdateManyWithoutKeyNestedInput
  }

  export type ApiKeyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    keyHash?: StringFieldUpdateOperationsInput | string
    keyIdDisplay?: StringFieldUpdateOperationsInput | string
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    environment?: StringFieldUpdateOperationsInput | string
    permissions?: JsonNullValueInput | InputJsonValue
    status?: EnumApiKeyStatusFieldUpdateOperationsInput | $Enums.ApiKeyStatus
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastUsed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activityLogs?: KeyActivityLogUncheckedUpdateManyWithoutKeyNestedInput
  }

  export type ApiKeyCreateManyInput = {
    id?: string
    name: string
    keyHash: string
    keyIdDisplay: string
    scope?: string | null
    ownerId: string
    environment?: string
    permissions?: JsonNullValueInput | InputJsonValue
    status?: $Enums.ApiKeyStatus
    createdDate?: Date | string
    expiryDate?: Date | string | null
    lastUsed?: Date | string | null
  }

  export type ApiKeyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    keyHash?: StringFieldUpdateOperationsInput | string
    keyIdDisplay?: StringFieldUpdateOperationsInput | string
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    environment?: StringFieldUpdateOperationsInput | string
    permissions?: JsonNullValueInput | InputJsonValue
    status?: EnumApiKeyStatusFieldUpdateOperationsInput | $Enums.ApiKeyStatus
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastUsed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ApiKeyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    keyHash?: StringFieldUpdateOperationsInput | string
    keyIdDisplay?: StringFieldUpdateOperationsInput | string
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    environment?: StringFieldUpdateOperationsInput | string
    permissions?: JsonNullValueInput | InputJsonValue
    status?: EnumApiKeyStatusFieldUpdateOperationsInput | $Enums.ApiKeyStatus
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastUsed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type KeyActivityLogCreateInput = {
    id?: string
    module: string
    action: string
    status: string
    ipAddress?: string | null
    timestamp?: Date | string
    key: ApiKeyCreateNestedOneWithoutActivityLogsInput
  }

  export type KeyActivityLogUncheckedCreateInput = {
    id?: string
    keyId: string
    module: string
    action: string
    status: string
    ipAddress?: string | null
    timestamp?: Date | string
  }

  export type KeyActivityLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    module?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    key?: ApiKeyUpdateOneRequiredWithoutActivityLogsNestedInput
  }

  export type KeyActivityLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    keyId?: StringFieldUpdateOperationsInput | string
    module?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KeyActivityLogCreateManyInput = {
    id?: string
    keyId: string
    module: string
    action: string
    status: string
    ipAddress?: string | null
    timestamp?: Date | string
  }

  export type KeyActivityLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    module?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KeyActivityLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    keyId?: StringFieldUpdateOperationsInput | string
    module?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProfileExtCreateInput = {
    id?: string
    phone?: string | null
    jobTitle?: string | null
    department?: string | null
    manager?: string | null
    timezone?: string | null
    roleTier?: string | null
    agentPreferences?: JsonNullValueInput | InputJsonValue
    notificationPrefs?: JsonNullValueInput | InputJsonValue
    accessScopes?: JsonNullValueInput | InputJsonValue
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProfileExtInput
  }

  export type UserProfileExtUncheckedCreateInput = {
    id?: string
    userId: string
    phone?: string | null
    jobTitle?: string | null
    department?: string | null
    manager?: string | null
    timezone?: string | null
    roleTier?: string | null
    agentPreferences?: JsonNullValueInput | InputJsonValue
    notificationPrefs?: JsonNullValueInput | InputJsonValue
    accessScopes?: JsonNullValueInput | InputJsonValue
    updatedAt?: Date | string
  }

  export type UserProfileExtUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    manager?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    roleTier?: NullableStringFieldUpdateOperationsInput | string | null
    agentPreferences?: JsonNullValueInput | InputJsonValue
    notificationPrefs?: JsonNullValueInput | InputJsonValue
    accessScopes?: JsonNullValueInput | InputJsonValue
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProfileExtNestedInput
  }

  export type UserProfileExtUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    manager?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    roleTier?: NullableStringFieldUpdateOperationsInput | string | null
    agentPreferences?: JsonNullValueInput | InputJsonValue
    notificationPrefs?: JsonNullValueInput | InputJsonValue
    accessScopes?: JsonNullValueInput | InputJsonValue
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProfileExtCreateManyInput = {
    id?: string
    userId: string
    phone?: string | null
    jobTitle?: string | null
    department?: string | null
    manager?: string | null
    timezone?: string | null
    roleTier?: string | null
    agentPreferences?: JsonNullValueInput | InputJsonValue
    notificationPrefs?: JsonNullValueInput | InputJsonValue
    accessScopes?: JsonNullValueInput | InputJsonValue
    updatedAt?: Date | string
  }

  export type UserProfileExtUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    manager?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    roleTier?: NullableStringFieldUpdateOperationsInput | string | null
    agentPreferences?: JsonNullValueInput | InputJsonValue
    notificationPrefs?: JsonNullValueInput | InputJsonValue
    accessScopes?: JsonNullValueInput | InputJsonValue
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProfileExtUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    manager?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    roleTier?: NullableStringFieldUpdateOperationsInput | string | null
    agentPreferences?: JsonNullValueInput | InputJsonValue
    notificationPrefs?: JsonNullValueInput | InputJsonValue
    accessScopes?: JsonNullValueInput | InputJsonValue
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ThemePreferenceCreateInput = {
    id?: string
    mode?: string
    accentColor?: string | null
    uiDensity?: string | null
    codeTheme?: string | null
    visualizationStyle?: string | null
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutThemePrefsInput
  }

  export type ThemePreferenceUncheckedCreateInput = {
    id?: string
    userId: string
    mode?: string
    accentColor?: string | null
    uiDensity?: string | null
    codeTheme?: string | null
    visualizationStyle?: string | null
    updatedAt?: Date | string
  }

  export type ThemePreferenceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    mode?: StringFieldUpdateOperationsInput | string
    accentColor?: NullableStringFieldUpdateOperationsInput | string | null
    uiDensity?: NullableStringFieldUpdateOperationsInput | string | null
    codeTheme?: NullableStringFieldUpdateOperationsInput | string | null
    visualizationStyle?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutThemePrefsNestedInput
  }

  export type ThemePreferenceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    mode?: StringFieldUpdateOperationsInput | string
    accentColor?: NullableStringFieldUpdateOperationsInput | string | null
    uiDensity?: NullableStringFieldUpdateOperationsInput | string | null
    codeTheme?: NullableStringFieldUpdateOperationsInput | string | null
    visualizationStyle?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ThemePreferenceCreateManyInput = {
    id?: string
    userId: string
    mode?: string
    accentColor?: string | null
    uiDensity?: string | null
    codeTheme?: string | null
    visualizationStyle?: string | null
    updatedAt?: Date | string
  }

  export type ThemePreferenceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    mode?: StringFieldUpdateOperationsInput | string
    accentColor?: NullableStringFieldUpdateOperationsInput | string | null
    uiDensity?: NullableStringFieldUpdateOperationsInput | string | null
    codeTheme?: NullableStringFieldUpdateOperationsInput | string | null
    visualizationStyle?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ThemePreferenceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    mode?: StringFieldUpdateOperationsInput | string
    accentColor?: NullableStringFieldUpdateOperationsInput | string | null
    uiDensity?: NullableStringFieldUpdateOperationsInput | string | null
    codeTheme?: NullableStringFieldUpdateOperationsInput | string | null
    visualizationStyle?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SecurityIncidentCreateInput = {
    id?: string
    type: string
    severity: string
    module?: string | null
    status?: string
    timestamp?: Date | string
  }

  export type SecurityIncidentUncheckedCreateInput = {
    id?: string
    type: string
    severity: string
    module?: string | null
    status?: string
    timestamp?: Date | string
  }

  export type SecurityIncidentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    module?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SecurityIncidentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    module?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SecurityIncidentCreateManyInput = {
    id?: string
    type: string
    severity: string
    module?: string | null
    status?: string
    timestamp?: Date | string
  }

  export type SecurityIncidentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    module?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SecurityIncidentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    module?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SecurityAuditLogCreateInput = {
    id?: string
    userId?: string | null
    action: string
    module?: string | null
    ipAddress?: string | null
    result?: string | null
    timestamp?: Date | string
  }

  export type SecurityAuditLogUncheckedCreateInput = {
    id?: string
    userId?: string | null
    action: string
    module?: string | null
    ipAddress?: string | null
    result?: string | null
    timestamp?: Date | string
  }

  export type SecurityAuditLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    module?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    result?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SecurityAuditLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    module?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    result?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SecurityAuditLogCreateManyInput = {
    id?: string
    userId?: string | null
    action: string
    module?: string | null
    ipAddress?: string | null
    result?: string | null
    timestamp?: Date | string
  }

  export type SecurityAuditLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    module?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    result?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SecurityAuditLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    module?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    result?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyProfileCreateInput = {
    id?: string
    name: string
    legalName?: string | null
    industry?: string | null
    size?: string | null
    hq?: string | null
    founded?: number | null
    website?: string | null
    supportEmail?: string | null
    branding?: NullableJsonNullValueInput | InputJsonValue
    compliance?: NullableJsonNullValueInput | InputJsonValue
    deploymentPolicies?: NullableJsonNullValueInput | InputJsonValue
    aiGovernance?: NullableJsonNullValueInput | InputJsonValue
    updatedAt?: Date | string
  }

  export type CompanyProfileUncheckedCreateInput = {
    id?: string
    name: string
    legalName?: string | null
    industry?: string | null
    size?: string | null
    hq?: string | null
    founded?: number | null
    website?: string | null
    supportEmail?: string | null
    branding?: NullableJsonNullValueInput | InputJsonValue
    compliance?: NullableJsonNullValueInput | InputJsonValue
    deploymentPolicies?: NullableJsonNullValueInput | InputJsonValue
    aiGovernance?: NullableJsonNullValueInput | InputJsonValue
    updatedAt?: Date | string
  }

  export type CompanyProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    legalName?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    hq?: NullableStringFieldUpdateOperationsInput | string | null
    founded?: NullableIntFieldUpdateOperationsInput | number | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    supportEmail?: NullableStringFieldUpdateOperationsInput | string | null
    branding?: NullableJsonNullValueInput | InputJsonValue
    compliance?: NullableJsonNullValueInput | InputJsonValue
    deploymentPolicies?: NullableJsonNullValueInput | InputJsonValue
    aiGovernance?: NullableJsonNullValueInput | InputJsonValue
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    legalName?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    hq?: NullableStringFieldUpdateOperationsInput | string | null
    founded?: NullableIntFieldUpdateOperationsInput | number | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    supportEmail?: NullableStringFieldUpdateOperationsInput | string | null
    branding?: NullableJsonNullValueInput | InputJsonValue
    compliance?: NullableJsonNullValueInput | InputJsonValue
    deploymentPolicies?: NullableJsonNullValueInput | InputJsonValue
    aiGovernance?: NullableJsonNullValueInput | InputJsonValue
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyProfileCreateManyInput = {
    id?: string
    name: string
    legalName?: string | null
    industry?: string | null
    size?: string | null
    hq?: string | null
    founded?: number | null
    website?: string | null
    supportEmail?: string | null
    branding?: NullableJsonNullValueInput | InputJsonValue
    compliance?: NullableJsonNullValueInput | InputJsonValue
    deploymentPolicies?: NullableJsonNullValueInput | InputJsonValue
    aiGovernance?: NullableJsonNullValueInput | InputJsonValue
    updatedAt?: Date | string
  }

  export type CompanyProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    legalName?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    hq?: NullableStringFieldUpdateOperationsInput | string | null
    founded?: NullableIntFieldUpdateOperationsInput | number | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    supportEmail?: NullableStringFieldUpdateOperationsInput | string | null
    branding?: NullableJsonNullValueInput | InputJsonValue
    compliance?: NullableJsonNullValueInput | InputJsonValue
    deploymentPolicies?: NullableJsonNullValueInput | InputJsonValue
    aiGovernance?: NullableJsonNullValueInput | InputJsonValue
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    legalName?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    hq?: NullableStringFieldUpdateOperationsInput | string | null
    founded?: NullableIntFieldUpdateOperationsInput | number | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    supportEmail?: NullableStringFieldUpdateOperationsInput | string | null
    branding?: NullableJsonNullValueInput | InputJsonValue
    compliance?: NullableJsonNullValueInput | InputJsonValue
    deploymentPolicies?: NullableJsonNullValueInput | InputJsonValue
    aiGovernance?: NullableJsonNullValueInput | InputJsonValue
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type RoleNullableScalarRelationFilter = {
    is?: RoleWhereInput | null
    isNot?: RoleWhereInput | null
  }

  export type TeamNullableScalarRelationFilter = {
    is?: TeamWhereInput | null
    isNot?: TeamWhereInput | null
  }

  export type ApiKeyListRelationFilter = {
    every?: ApiKeyWhereInput
    some?: ApiKeyWhereInput
    none?: ApiKeyWhereInput
  }

  export type ActiveSessionListRelationFilter = {
    every?: ActiveSessionWhereInput
    some?: ActiveSessionWhereInput
    none?: ActiveSessionWhereInput
  }

  export type UserProfileExtNullableScalarRelationFilter = {
    is?: UserProfileExtWhereInput | null
    isNot?: UserProfileExtWhereInput | null
  }

  export type ThemePreferenceNullableScalarRelationFilter = {
    is?: ThemePreferenceWhereInput | null
    isNot?: ThemePreferenceWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ApiKeyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ActiveSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    passwordHash?: SortOrder
    roleId?: SortOrder
    teamId?: SortOrder
    status?: SortOrder
    joinedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    passwordHash?: SortOrder
    roleId?: SortOrder
    teamId?: SortOrder
    status?: SortOrder
    joinedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    passwordHash?: SortOrder
    roleId?: SortOrder
    teamId?: SortOrder
    status?: SortOrder
    joinedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoleCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    permissions?: SortOrder
    modulesAccess?: SortOrder
    createdAt?: SortOrder
  }

  export type RoleMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type RoleMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type TeamCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    memberCount?: SortOrder
    leadId?: SortOrder
    parentTeamId?: SortOrder
    createdAt?: SortOrder
  }

  export type TeamAvgOrderByAggregateInput = {
    memberCount?: SortOrder
  }

  export type TeamMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    memberCount?: SortOrder
    leadId?: SortOrder
    parentTeamId?: SortOrder
    createdAt?: SortOrder
  }

  export type TeamMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    memberCount?: SortOrder
    leadId?: SortOrder
    parentTeamId?: SortOrder
    createdAt?: SortOrder
  }

  export type TeamSumOrderByAggregateInput = {
    memberCount?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumSessionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SessionStatus | EnumSessionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSessionStatusFilter<$PrismaModel> | $Enums.SessionStatus
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ActiveSessionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    device?: SortOrder
    location?: SortOrder
    ip?: SortOrder
    tokenHash?: SortOrder
    status?: SortOrder
    loginTime?: SortOrder
    expiresAt?: SortOrder
  }

  export type ActiveSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    device?: SortOrder
    location?: SortOrder
    ip?: SortOrder
    tokenHash?: SortOrder
    status?: SortOrder
    loginTime?: SortOrder
    expiresAt?: SortOrder
  }

  export type ActiveSessionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    device?: SortOrder
    location?: SortOrder
    ip?: SortOrder
    tokenHash?: SortOrder
    status?: SortOrder
    loginTime?: SortOrder
    expiresAt?: SortOrder
  }

  export type EnumSessionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SessionStatus | EnumSessionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSessionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SessionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSessionStatusFilter<$PrismaModel>
    _max?: NestedEnumSessionStatusFilter<$PrismaModel>
  }

  export type EnumApiKeyStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ApiKeyStatus | EnumApiKeyStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApiKeyStatus[] | ListEnumApiKeyStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApiKeyStatus[] | ListEnumApiKeyStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumApiKeyStatusFilter<$PrismaModel> | $Enums.ApiKeyStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type KeyActivityLogListRelationFilter = {
    every?: KeyActivityLogWhereInput
    some?: KeyActivityLogWhereInput
    none?: KeyActivityLogWhereInput
  }

  export type KeyActivityLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ApiKeyCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    keyHash?: SortOrder
    keyIdDisplay?: SortOrder
    scope?: SortOrder
    ownerId?: SortOrder
    environment?: SortOrder
    permissions?: SortOrder
    status?: SortOrder
    createdDate?: SortOrder
    expiryDate?: SortOrder
    lastUsed?: SortOrder
  }

  export type ApiKeyMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    keyHash?: SortOrder
    keyIdDisplay?: SortOrder
    scope?: SortOrder
    ownerId?: SortOrder
    environment?: SortOrder
    status?: SortOrder
    createdDate?: SortOrder
    expiryDate?: SortOrder
    lastUsed?: SortOrder
  }

  export type ApiKeyMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    keyHash?: SortOrder
    keyIdDisplay?: SortOrder
    scope?: SortOrder
    ownerId?: SortOrder
    environment?: SortOrder
    status?: SortOrder
    createdDate?: SortOrder
    expiryDate?: SortOrder
    lastUsed?: SortOrder
  }

  export type EnumApiKeyStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ApiKeyStatus | EnumApiKeyStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApiKeyStatus[] | ListEnumApiKeyStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApiKeyStatus[] | ListEnumApiKeyStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumApiKeyStatusWithAggregatesFilter<$PrismaModel> | $Enums.ApiKeyStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumApiKeyStatusFilter<$PrismaModel>
    _max?: NestedEnumApiKeyStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type ApiKeyScalarRelationFilter = {
    is?: ApiKeyWhereInput
    isNot?: ApiKeyWhereInput
  }

  export type KeyActivityLogCountOrderByAggregateInput = {
    id?: SortOrder
    keyId?: SortOrder
    module?: SortOrder
    action?: SortOrder
    status?: SortOrder
    ipAddress?: SortOrder
    timestamp?: SortOrder
  }

  export type KeyActivityLogMaxOrderByAggregateInput = {
    id?: SortOrder
    keyId?: SortOrder
    module?: SortOrder
    action?: SortOrder
    status?: SortOrder
    ipAddress?: SortOrder
    timestamp?: SortOrder
  }

  export type KeyActivityLogMinOrderByAggregateInput = {
    id?: SortOrder
    keyId?: SortOrder
    module?: SortOrder
    action?: SortOrder
    status?: SortOrder
    ipAddress?: SortOrder
    timestamp?: SortOrder
  }

  export type UserProfileExtCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    phone?: SortOrder
    jobTitle?: SortOrder
    department?: SortOrder
    manager?: SortOrder
    timezone?: SortOrder
    roleTier?: SortOrder
    agentPreferences?: SortOrder
    notificationPrefs?: SortOrder
    accessScopes?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserProfileExtMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    phone?: SortOrder
    jobTitle?: SortOrder
    department?: SortOrder
    manager?: SortOrder
    timezone?: SortOrder
    roleTier?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserProfileExtMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    phone?: SortOrder
    jobTitle?: SortOrder
    department?: SortOrder
    manager?: SortOrder
    timezone?: SortOrder
    roleTier?: SortOrder
    updatedAt?: SortOrder
  }

  export type ThemePreferenceCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    mode?: SortOrder
    accentColor?: SortOrder
    uiDensity?: SortOrder
    codeTheme?: SortOrder
    visualizationStyle?: SortOrder
    updatedAt?: SortOrder
  }

  export type ThemePreferenceMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    mode?: SortOrder
    accentColor?: SortOrder
    uiDensity?: SortOrder
    codeTheme?: SortOrder
    visualizationStyle?: SortOrder
    updatedAt?: SortOrder
  }

  export type ThemePreferenceMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    mode?: SortOrder
    accentColor?: SortOrder
    uiDensity?: SortOrder
    codeTheme?: SortOrder
    visualizationStyle?: SortOrder
    updatedAt?: SortOrder
  }

  export type SecurityIncidentCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    severity?: SortOrder
    module?: SortOrder
    status?: SortOrder
    timestamp?: SortOrder
  }

  export type SecurityIncidentMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    severity?: SortOrder
    module?: SortOrder
    status?: SortOrder
    timestamp?: SortOrder
  }

  export type SecurityIncidentMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    severity?: SortOrder
    module?: SortOrder
    status?: SortOrder
    timestamp?: SortOrder
  }

  export type SecurityAuditLogCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    module?: SortOrder
    ipAddress?: SortOrder
    result?: SortOrder
    timestamp?: SortOrder
  }

  export type SecurityAuditLogMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    module?: SortOrder
    ipAddress?: SortOrder
    result?: SortOrder
    timestamp?: SortOrder
  }

  export type SecurityAuditLogMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    module?: SortOrder
    ipAddress?: SortOrder
    result?: SortOrder
    timestamp?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type CompanyProfileCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    legalName?: SortOrder
    industry?: SortOrder
    size?: SortOrder
    hq?: SortOrder
    founded?: SortOrder
    website?: SortOrder
    supportEmail?: SortOrder
    branding?: SortOrder
    compliance?: SortOrder
    deploymentPolicies?: SortOrder
    aiGovernance?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompanyProfileAvgOrderByAggregateInput = {
    founded?: SortOrder
  }

  export type CompanyProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    legalName?: SortOrder
    industry?: SortOrder
    size?: SortOrder
    hq?: SortOrder
    founded?: SortOrder
    website?: SortOrder
    supportEmail?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompanyProfileMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    legalName?: SortOrder
    industry?: SortOrder
    size?: SortOrder
    hq?: SortOrder
    founded?: SortOrder
    website?: SortOrder
    supportEmail?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompanyProfileSumOrderByAggregateInput = {
    founded?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type RoleCreateNestedOneWithoutUsersInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput
    connect?: RoleWhereUniqueInput
  }

  export type TeamCreateNestedOneWithoutUsersInput = {
    create?: XOR<TeamCreateWithoutUsersInput, TeamUncheckedCreateWithoutUsersInput>
    connectOrCreate?: TeamCreateOrConnectWithoutUsersInput
    connect?: TeamWhereUniqueInput
  }

  export type ApiKeyCreateNestedManyWithoutOwnerInput = {
    create?: XOR<ApiKeyCreateWithoutOwnerInput, ApiKeyUncheckedCreateWithoutOwnerInput> | ApiKeyCreateWithoutOwnerInput[] | ApiKeyUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ApiKeyCreateOrConnectWithoutOwnerInput | ApiKeyCreateOrConnectWithoutOwnerInput[]
    createMany?: ApiKeyCreateManyOwnerInputEnvelope
    connect?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
  }

  export type ActiveSessionCreateNestedManyWithoutUserInput = {
    create?: XOR<ActiveSessionCreateWithoutUserInput, ActiveSessionUncheckedCreateWithoutUserInput> | ActiveSessionCreateWithoutUserInput[] | ActiveSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActiveSessionCreateOrConnectWithoutUserInput | ActiveSessionCreateOrConnectWithoutUserInput[]
    createMany?: ActiveSessionCreateManyUserInputEnvelope
    connect?: ActiveSessionWhereUniqueInput | ActiveSessionWhereUniqueInput[]
  }

  export type UserProfileExtCreateNestedOneWithoutUserInput = {
    create?: XOR<UserProfileExtCreateWithoutUserInput, UserProfileExtUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserProfileExtCreateOrConnectWithoutUserInput
    connect?: UserProfileExtWhereUniqueInput
  }

  export type ThemePreferenceCreateNestedOneWithoutUserInput = {
    create?: XOR<ThemePreferenceCreateWithoutUserInput, ThemePreferenceUncheckedCreateWithoutUserInput>
    connectOrCreate?: ThemePreferenceCreateOrConnectWithoutUserInput
    connect?: ThemePreferenceWhereUniqueInput
  }

  export type ApiKeyUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<ApiKeyCreateWithoutOwnerInput, ApiKeyUncheckedCreateWithoutOwnerInput> | ApiKeyCreateWithoutOwnerInput[] | ApiKeyUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ApiKeyCreateOrConnectWithoutOwnerInput | ApiKeyCreateOrConnectWithoutOwnerInput[]
    createMany?: ApiKeyCreateManyOwnerInputEnvelope
    connect?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
  }

  export type ActiveSessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ActiveSessionCreateWithoutUserInput, ActiveSessionUncheckedCreateWithoutUserInput> | ActiveSessionCreateWithoutUserInput[] | ActiveSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActiveSessionCreateOrConnectWithoutUserInput | ActiveSessionCreateOrConnectWithoutUserInput[]
    createMany?: ActiveSessionCreateManyUserInputEnvelope
    connect?: ActiveSessionWhereUniqueInput | ActiveSessionWhereUniqueInput[]
  }

  export type UserProfileExtUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<UserProfileExtCreateWithoutUserInput, UserProfileExtUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserProfileExtCreateOrConnectWithoutUserInput
    connect?: UserProfileExtWhereUniqueInput
  }

  export type ThemePreferenceUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<ThemePreferenceCreateWithoutUserInput, ThemePreferenceUncheckedCreateWithoutUserInput>
    connectOrCreate?: ThemePreferenceCreateOrConnectWithoutUserInput
    connect?: ThemePreferenceWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumUserStatusFieldUpdateOperationsInput = {
    set?: $Enums.UserStatus
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type RoleUpdateOneWithoutUsersNestedInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput
    upsert?: RoleUpsertWithoutUsersInput
    disconnect?: RoleWhereInput | boolean
    delete?: RoleWhereInput | boolean
    connect?: RoleWhereUniqueInput
    update?: XOR<XOR<RoleUpdateToOneWithWhereWithoutUsersInput, RoleUpdateWithoutUsersInput>, RoleUncheckedUpdateWithoutUsersInput>
  }

  export type TeamUpdateOneWithoutUsersNestedInput = {
    create?: XOR<TeamCreateWithoutUsersInput, TeamUncheckedCreateWithoutUsersInput>
    connectOrCreate?: TeamCreateOrConnectWithoutUsersInput
    upsert?: TeamUpsertWithoutUsersInput
    disconnect?: TeamWhereInput | boolean
    delete?: TeamWhereInput | boolean
    connect?: TeamWhereUniqueInput
    update?: XOR<XOR<TeamUpdateToOneWithWhereWithoutUsersInput, TeamUpdateWithoutUsersInput>, TeamUncheckedUpdateWithoutUsersInput>
  }

  export type ApiKeyUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<ApiKeyCreateWithoutOwnerInput, ApiKeyUncheckedCreateWithoutOwnerInput> | ApiKeyCreateWithoutOwnerInput[] | ApiKeyUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ApiKeyCreateOrConnectWithoutOwnerInput | ApiKeyCreateOrConnectWithoutOwnerInput[]
    upsert?: ApiKeyUpsertWithWhereUniqueWithoutOwnerInput | ApiKeyUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: ApiKeyCreateManyOwnerInputEnvelope
    set?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    disconnect?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    delete?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    connect?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    update?: ApiKeyUpdateWithWhereUniqueWithoutOwnerInput | ApiKeyUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: ApiKeyUpdateManyWithWhereWithoutOwnerInput | ApiKeyUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: ApiKeyScalarWhereInput | ApiKeyScalarWhereInput[]
  }

  export type ActiveSessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<ActiveSessionCreateWithoutUserInput, ActiveSessionUncheckedCreateWithoutUserInput> | ActiveSessionCreateWithoutUserInput[] | ActiveSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActiveSessionCreateOrConnectWithoutUserInput | ActiveSessionCreateOrConnectWithoutUserInput[]
    upsert?: ActiveSessionUpsertWithWhereUniqueWithoutUserInput | ActiveSessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ActiveSessionCreateManyUserInputEnvelope
    set?: ActiveSessionWhereUniqueInput | ActiveSessionWhereUniqueInput[]
    disconnect?: ActiveSessionWhereUniqueInput | ActiveSessionWhereUniqueInput[]
    delete?: ActiveSessionWhereUniqueInput | ActiveSessionWhereUniqueInput[]
    connect?: ActiveSessionWhereUniqueInput | ActiveSessionWhereUniqueInput[]
    update?: ActiveSessionUpdateWithWhereUniqueWithoutUserInput | ActiveSessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ActiveSessionUpdateManyWithWhereWithoutUserInput | ActiveSessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ActiveSessionScalarWhereInput | ActiveSessionScalarWhereInput[]
  }

  export type UserProfileExtUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserProfileExtCreateWithoutUserInput, UserProfileExtUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserProfileExtCreateOrConnectWithoutUserInput
    upsert?: UserProfileExtUpsertWithoutUserInput
    disconnect?: UserProfileExtWhereInput | boolean
    delete?: UserProfileExtWhereInput | boolean
    connect?: UserProfileExtWhereUniqueInput
    update?: XOR<XOR<UserProfileExtUpdateToOneWithWhereWithoutUserInput, UserProfileExtUpdateWithoutUserInput>, UserProfileExtUncheckedUpdateWithoutUserInput>
  }

  export type ThemePreferenceUpdateOneWithoutUserNestedInput = {
    create?: XOR<ThemePreferenceCreateWithoutUserInput, ThemePreferenceUncheckedCreateWithoutUserInput>
    connectOrCreate?: ThemePreferenceCreateOrConnectWithoutUserInput
    upsert?: ThemePreferenceUpsertWithoutUserInput
    disconnect?: ThemePreferenceWhereInput | boolean
    delete?: ThemePreferenceWhereInput | boolean
    connect?: ThemePreferenceWhereUniqueInput
    update?: XOR<XOR<ThemePreferenceUpdateToOneWithWhereWithoutUserInput, ThemePreferenceUpdateWithoutUserInput>, ThemePreferenceUncheckedUpdateWithoutUserInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ApiKeyUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<ApiKeyCreateWithoutOwnerInput, ApiKeyUncheckedCreateWithoutOwnerInput> | ApiKeyCreateWithoutOwnerInput[] | ApiKeyUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ApiKeyCreateOrConnectWithoutOwnerInput | ApiKeyCreateOrConnectWithoutOwnerInput[]
    upsert?: ApiKeyUpsertWithWhereUniqueWithoutOwnerInput | ApiKeyUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: ApiKeyCreateManyOwnerInputEnvelope
    set?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    disconnect?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    delete?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    connect?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    update?: ApiKeyUpdateWithWhereUniqueWithoutOwnerInput | ApiKeyUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: ApiKeyUpdateManyWithWhereWithoutOwnerInput | ApiKeyUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: ApiKeyScalarWhereInput | ApiKeyScalarWhereInput[]
  }

  export type ActiveSessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ActiveSessionCreateWithoutUserInput, ActiveSessionUncheckedCreateWithoutUserInput> | ActiveSessionCreateWithoutUserInput[] | ActiveSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActiveSessionCreateOrConnectWithoutUserInput | ActiveSessionCreateOrConnectWithoutUserInput[]
    upsert?: ActiveSessionUpsertWithWhereUniqueWithoutUserInput | ActiveSessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ActiveSessionCreateManyUserInputEnvelope
    set?: ActiveSessionWhereUniqueInput | ActiveSessionWhereUniqueInput[]
    disconnect?: ActiveSessionWhereUniqueInput | ActiveSessionWhereUniqueInput[]
    delete?: ActiveSessionWhereUniqueInput | ActiveSessionWhereUniqueInput[]
    connect?: ActiveSessionWhereUniqueInput | ActiveSessionWhereUniqueInput[]
    update?: ActiveSessionUpdateWithWhereUniqueWithoutUserInput | ActiveSessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ActiveSessionUpdateManyWithWhereWithoutUserInput | ActiveSessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ActiveSessionScalarWhereInput | ActiveSessionScalarWhereInput[]
  }

  export type UserProfileExtUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserProfileExtCreateWithoutUserInput, UserProfileExtUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserProfileExtCreateOrConnectWithoutUserInput
    upsert?: UserProfileExtUpsertWithoutUserInput
    disconnect?: UserProfileExtWhereInput | boolean
    delete?: UserProfileExtWhereInput | boolean
    connect?: UserProfileExtWhereUniqueInput
    update?: XOR<XOR<UserProfileExtUpdateToOneWithWhereWithoutUserInput, UserProfileExtUpdateWithoutUserInput>, UserProfileExtUncheckedUpdateWithoutUserInput>
  }

  export type ThemePreferenceUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<ThemePreferenceCreateWithoutUserInput, ThemePreferenceUncheckedCreateWithoutUserInput>
    connectOrCreate?: ThemePreferenceCreateOrConnectWithoutUserInput
    upsert?: ThemePreferenceUpsertWithoutUserInput
    disconnect?: ThemePreferenceWhereInput | boolean
    delete?: ThemePreferenceWhereInput | boolean
    connect?: ThemePreferenceWhereUniqueInput
    update?: XOR<XOR<ThemePreferenceUpdateToOneWithWhereWithoutUserInput, ThemePreferenceUpdateWithoutUserInput>, ThemePreferenceUncheckedUpdateWithoutUserInput>
  }

  export type UserCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRoleInput | UserUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRoleInput | UserUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRoleInput | UserUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRoleInput | UserUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRoleInput | UserUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRoleInput | UserUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserCreateNestedManyWithoutTeamInput = {
    create?: XOR<UserCreateWithoutTeamInput, UserUncheckedCreateWithoutTeamInput> | UserCreateWithoutTeamInput[] | UserUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTeamInput | UserCreateOrConnectWithoutTeamInput[]
    createMany?: UserCreateManyTeamInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutTeamInput = {
    create?: XOR<UserCreateWithoutTeamInput, UserUncheckedCreateWithoutTeamInput> | UserCreateWithoutTeamInput[] | UserUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTeamInput | UserCreateOrConnectWithoutTeamInput[]
    createMany?: UserCreateManyTeamInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateManyWithoutTeamNestedInput = {
    create?: XOR<UserCreateWithoutTeamInput, UserUncheckedCreateWithoutTeamInput> | UserCreateWithoutTeamInput[] | UserUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTeamInput | UserCreateOrConnectWithoutTeamInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutTeamInput | UserUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: UserCreateManyTeamInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutTeamInput | UserUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: UserUpdateManyWithWhereWithoutTeamInput | UserUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: XOR<UserCreateWithoutTeamInput, UserUncheckedCreateWithoutTeamInput> | UserCreateWithoutTeamInput[] | UserUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTeamInput | UserCreateOrConnectWithoutTeamInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutTeamInput | UserUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: UserCreateManyTeamInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutTeamInput | UserUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: UserUpdateManyWithWhereWithoutTeamInput | UserUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumSessionStatusFieldUpdateOperationsInput = {
    set?: $Enums.SessionStatus
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserCreateNestedOneWithoutApiKeysInput = {
    create?: XOR<UserCreateWithoutApiKeysInput, UserUncheckedCreateWithoutApiKeysInput>
    connectOrCreate?: UserCreateOrConnectWithoutApiKeysInput
    connect?: UserWhereUniqueInput
  }

  export type KeyActivityLogCreateNestedManyWithoutKeyInput = {
    create?: XOR<KeyActivityLogCreateWithoutKeyInput, KeyActivityLogUncheckedCreateWithoutKeyInput> | KeyActivityLogCreateWithoutKeyInput[] | KeyActivityLogUncheckedCreateWithoutKeyInput[]
    connectOrCreate?: KeyActivityLogCreateOrConnectWithoutKeyInput | KeyActivityLogCreateOrConnectWithoutKeyInput[]
    createMany?: KeyActivityLogCreateManyKeyInputEnvelope
    connect?: KeyActivityLogWhereUniqueInput | KeyActivityLogWhereUniqueInput[]
  }

  export type KeyActivityLogUncheckedCreateNestedManyWithoutKeyInput = {
    create?: XOR<KeyActivityLogCreateWithoutKeyInput, KeyActivityLogUncheckedCreateWithoutKeyInput> | KeyActivityLogCreateWithoutKeyInput[] | KeyActivityLogUncheckedCreateWithoutKeyInput[]
    connectOrCreate?: KeyActivityLogCreateOrConnectWithoutKeyInput | KeyActivityLogCreateOrConnectWithoutKeyInput[]
    createMany?: KeyActivityLogCreateManyKeyInputEnvelope
    connect?: KeyActivityLogWhereUniqueInput | KeyActivityLogWhereUniqueInput[]
  }

  export type EnumApiKeyStatusFieldUpdateOperationsInput = {
    set?: $Enums.ApiKeyStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutApiKeysNestedInput = {
    create?: XOR<UserCreateWithoutApiKeysInput, UserUncheckedCreateWithoutApiKeysInput>
    connectOrCreate?: UserCreateOrConnectWithoutApiKeysInput
    upsert?: UserUpsertWithoutApiKeysInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutApiKeysInput, UserUpdateWithoutApiKeysInput>, UserUncheckedUpdateWithoutApiKeysInput>
  }

  export type KeyActivityLogUpdateManyWithoutKeyNestedInput = {
    create?: XOR<KeyActivityLogCreateWithoutKeyInput, KeyActivityLogUncheckedCreateWithoutKeyInput> | KeyActivityLogCreateWithoutKeyInput[] | KeyActivityLogUncheckedCreateWithoutKeyInput[]
    connectOrCreate?: KeyActivityLogCreateOrConnectWithoutKeyInput | KeyActivityLogCreateOrConnectWithoutKeyInput[]
    upsert?: KeyActivityLogUpsertWithWhereUniqueWithoutKeyInput | KeyActivityLogUpsertWithWhereUniqueWithoutKeyInput[]
    createMany?: KeyActivityLogCreateManyKeyInputEnvelope
    set?: KeyActivityLogWhereUniqueInput | KeyActivityLogWhereUniqueInput[]
    disconnect?: KeyActivityLogWhereUniqueInput | KeyActivityLogWhereUniqueInput[]
    delete?: KeyActivityLogWhereUniqueInput | KeyActivityLogWhereUniqueInput[]
    connect?: KeyActivityLogWhereUniqueInput | KeyActivityLogWhereUniqueInput[]
    update?: KeyActivityLogUpdateWithWhereUniqueWithoutKeyInput | KeyActivityLogUpdateWithWhereUniqueWithoutKeyInput[]
    updateMany?: KeyActivityLogUpdateManyWithWhereWithoutKeyInput | KeyActivityLogUpdateManyWithWhereWithoutKeyInput[]
    deleteMany?: KeyActivityLogScalarWhereInput | KeyActivityLogScalarWhereInput[]
  }

  export type KeyActivityLogUncheckedUpdateManyWithoutKeyNestedInput = {
    create?: XOR<KeyActivityLogCreateWithoutKeyInput, KeyActivityLogUncheckedCreateWithoutKeyInput> | KeyActivityLogCreateWithoutKeyInput[] | KeyActivityLogUncheckedCreateWithoutKeyInput[]
    connectOrCreate?: KeyActivityLogCreateOrConnectWithoutKeyInput | KeyActivityLogCreateOrConnectWithoutKeyInput[]
    upsert?: KeyActivityLogUpsertWithWhereUniqueWithoutKeyInput | KeyActivityLogUpsertWithWhereUniqueWithoutKeyInput[]
    createMany?: KeyActivityLogCreateManyKeyInputEnvelope
    set?: KeyActivityLogWhereUniqueInput | KeyActivityLogWhereUniqueInput[]
    disconnect?: KeyActivityLogWhereUniqueInput | KeyActivityLogWhereUniqueInput[]
    delete?: KeyActivityLogWhereUniqueInput | KeyActivityLogWhereUniqueInput[]
    connect?: KeyActivityLogWhereUniqueInput | KeyActivityLogWhereUniqueInput[]
    update?: KeyActivityLogUpdateWithWhereUniqueWithoutKeyInput | KeyActivityLogUpdateWithWhereUniqueWithoutKeyInput[]
    updateMany?: KeyActivityLogUpdateManyWithWhereWithoutKeyInput | KeyActivityLogUpdateManyWithWhereWithoutKeyInput[]
    deleteMany?: KeyActivityLogScalarWhereInput | KeyActivityLogScalarWhereInput[]
  }

  export type ApiKeyCreateNestedOneWithoutActivityLogsInput = {
    create?: XOR<ApiKeyCreateWithoutActivityLogsInput, ApiKeyUncheckedCreateWithoutActivityLogsInput>
    connectOrCreate?: ApiKeyCreateOrConnectWithoutActivityLogsInput
    connect?: ApiKeyWhereUniqueInput
  }

  export type ApiKeyUpdateOneRequiredWithoutActivityLogsNestedInput = {
    create?: XOR<ApiKeyCreateWithoutActivityLogsInput, ApiKeyUncheckedCreateWithoutActivityLogsInput>
    connectOrCreate?: ApiKeyCreateOrConnectWithoutActivityLogsInput
    upsert?: ApiKeyUpsertWithoutActivityLogsInput
    connect?: ApiKeyWhereUniqueInput
    update?: XOR<XOR<ApiKeyUpdateToOneWithWhereWithoutActivityLogsInput, ApiKeyUpdateWithoutActivityLogsInput>, ApiKeyUncheckedUpdateWithoutActivityLogsInput>
  }

  export type UserCreateNestedOneWithoutProfileExtInput = {
    create?: XOR<UserCreateWithoutProfileExtInput, UserUncheckedCreateWithoutProfileExtInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileExtInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutProfileExtNestedInput = {
    create?: XOR<UserCreateWithoutProfileExtInput, UserUncheckedCreateWithoutProfileExtInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileExtInput
    upsert?: UserUpsertWithoutProfileExtInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProfileExtInput, UserUpdateWithoutProfileExtInput>, UserUncheckedUpdateWithoutProfileExtInput>
  }

  export type UserCreateNestedOneWithoutThemePrefsInput = {
    create?: XOR<UserCreateWithoutThemePrefsInput, UserUncheckedCreateWithoutThemePrefsInput>
    connectOrCreate?: UserCreateOrConnectWithoutThemePrefsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutThemePrefsNestedInput = {
    create?: XOR<UserCreateWithoutThemePrefsInput, UserUncheckedCreateWithoutThemePrefsInput>
    connectOrCreate?: UserCreateOrConnectWithoutThemePrefsInput
    upsert?: UserUpsertWithoutThemePrefsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutThemePrefsInput, UserUpdateWithoutThemePrefsInput>, UserUncheckedUpdateWithoutThemePrefsInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumSessionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SessionStatus | EnumSessionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSessionStatusFilter<$PrismaModel> | $Enums.SessionStatus
  }

  export type NestedEnumSessionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SessionStatus | EnumSessionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSessionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SessionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSessionStatusFilter<$PrismaModel>
    _max?: NestedEnumSessionStatusFilter<$PrismaModel>
  }

  export type NestedEnumApiKeyStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ApiKeyStatus | EnumApiKeyStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApiKeyStatus[] | ListEnumApiKeyStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApiKeyStatus[] | ListEnumApiKeyStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumApiKeyStatusFilter<$PrismaModel> | $Enums.ApiKeyStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumApiKeyStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ApiKeyStatus | EnumApiKeyStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApiKeyStatus[] | ListEnumApiKeyStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApiKeyStatus[] | ListEnumApiKeyStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumApiKeyStatusWithAggregatesFilter<$PrismaModel> | $Enums.ApiKeyStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumApiKeyStatusFilter<$PrismaModel>
    _max?: NestedEnumApiKeyStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type RoleCreateWithoutUsersInput = {
    id?: string
    name: string
    description?: string | null
    permissions?: JsonNullValueInput | InputJsonValue
    modulesAccess?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type RoleUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    description?: string | null
    permissions?: JsonNullValueInput | InputJsonValue
    modulesAccess?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type RoleCreateOrConnectWithoutUsersInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
  }

  export type TeamCreateWithoutUsersInput = {
    id?: string
    name: string
    description?: string | null
    memberCount?: number
    leadId?: string | null
    parentTeamId?: string | null
    createdAt?: Date | string
  }

  export type TeamUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    description?: string | null
    memberCount?: number
    leadId?: string | null
    parentTeamId?: string | null
    createdAt?: Date | string
  }

  export type TeamCreateOrConnectWithoutUsersInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutUsersInput, TeamUncheckedCreateWithoutUsersInput>
  }

  export type ApiKeyCreateWithoutOwnerInput = {
    id?: string
    name: string
    keyHash: string
    keyIdDisplay: string
    scope?: string | null
    environment?: string
    permissions?: JsonNullValueInput | InputJsonValue
    status?: $Enums.ApiKeyStatus
    createdDate?: Date | string
    expiryDate?: Date | string | null
    lastUsed?: Date | string | null
    activityLogs?: KeyActivityLogCreateNestedManyWithoutKeyInput
  }

  export type ApiKeyUncheckedCreateWithoutOwnerInput = {
    id?: string
    name: string
    keyHash: string
    keyIdDisplay: string
    scope?: string | null
    environment?: string
    permissions?: JsonNullValueInput | InputJsonValue
    status?: $Enums.ApiKeyStatus
    createdDate?: Date | string
    expiryDate?: Date | string | null
    lastUsed?: Date | string | null
    activityLogs?: KeyActivityLogUncheckedCreateNestedManyWithoutKeyInput
  }

  export type ApiKeyCreateOrConnectWithoutOwnerInput = {
    where: ApiKeyWhereUniqueInput
    create: XOR<ApiKeyCreateWithoutOwnerInput, ApiKeyUncheckedCreateWithoutOwnerInput>
  }

  export type ApiKeyCreateManyOwnerInputEnvelope = {
    data: ApiKeyCreateManyOwnerInput | ApiKeyCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type ActiveSessionCreateWithoutUserInput = {
    id?: string
    device?: string | null
    location?: string | null
    ip?: string | null
    tokenHash: string
    status?: $Enums.SessionStatus
    loginTime?: Date | string
    expiresAt: Date | string
  }

  export type ActiveSessionUncheckedCreateWithoutUserInput = {
    id?: string
    device?: string | null
    location?: string | null
    ip?: string | null
    tokenHash: string
    status?: $Enums.SessionStatus
    loginTime?: Date | string
    expiresAt: Date | string
  }

  export type ActiveSessionCreateOrConnectWithoutUserInput = {
    where: ActiveSessionWhereUniqueInput
    create: XOR<ActiveSessionCreateWithoutUserInput, ActiveSessionUncheckedCreateWithoutUserInput>
  }

  export type ActiveSessionCreateManyUserInputEnvelope = {
    data: ActiveSessionCreateManyUserInput | ActiveSessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserProfileExtCreateWithoutUserInput = {
    id?: string
    phone?: string | null
    jobTitle?: string | null
    department?: string | null
    manager?: string | null
    timezone?: string | null
    roleTier?: string | null
    agentPreferences?: JsonNullValueInput | InputJsonValue
    notificationPrefs?: JsonNullValueInput | InputJsonValue
    accessScopes?: JsonNullValueInput | InputJsonValue
    updatedAt?: Date | string
  }

  export type UserProfileExtUncheckedCreateWithoutUserInput = {
    id?: string
    phone?: string | null
    jobTitle?: string | null
    department?: string | null
    manager?: string | null
    timezone?: string | null
    roleTier?: string | null
    agentPreferences?: JsonNullValueInput | InputJsonValue
    notificationPrefs?: JsonNullValueInput | InputJsonValue
    accessScopes?: JsonNullValueInput | InputJsonValue
    updatedAt?: Date | string
  }

  export type UserProfileExtCreateOrConnectWithoutUserInput = {
    where: UserProfileExtWhereUniqueInput
    create: XOR<UserProfileExtCreateWithoutUserInput, UserProfileExtUncheckedCreateWithoutUserInput>
  }

  export type ThemePreferenceCreateWithoutUserInput = {
    id?: string
    mode?: string
    accentColor?: string | null
    uiDensity?: string | null
    codeTheme?: string | null
    visualizationStyle?: string | null
    updatedAt?: Date | string
  }

  export type ThemePreferenceUncheckedCreateWithoutUserInput = {
    id?: string
    mode?: string
    accentColor?: string | null
    uiDensity?: string | null
    codeTheme?: string | null
    visualizationStyle?: string | null
    updatedAt?: Date | string
  }

  export type ThemePreferenceCreateOrConnectWithoutUserInput = {
    where: ThemePreferenceWhereUniqueInput
    create: XOR<ThemePreferenceCreateWithoutUserInput, ThemePreferenceUncheckedCreateWithoutUserInput>
  }

  export type RoleUpsertWithoutUsersInput = {
    update: XOR<RoleUpdateWithoutUsersInput, RoleUncheckedUpdateWithoutUsersInput>
    create: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    where?: RoleWhereInput
  }

  export type RoleUpdateToOneWithWhereWithoutUsersInput = {
    where?: RoleWhereInput
    data: XOR<RoleUpdateWithoutUsersInput, RoleUncheckedUpdateWithoutUsersInput>
  }

  export type RoleUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    permissions?: JsonNullValueInput | InputJsonValue
    modulesAccess?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    permissions?: JsonNullValueInput | InputJsonValue
    modulesAccess?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamUpsertWithoutUsersInput = {
    update: XOR<TeamUpdateWithoutUsersInput, TeamUncheckedUpdateWithoutUsersInput>
    create: XOR<TeamCreateWithoutUsersInput, TeamUncheckedCreateWithoutUsersInput>
    where?: TeamWhereInput
  }

  export type TeamUpdateToOneWithWhereWithoutUsersInput = {
    where?: TeamWhereInput
    data: XOR<TeamUpdateWithoutUsersInput, TeamUncheckedUpdateWithoutUsersInput>
  }

  export type TeamUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    memberCount?: IntFieldUpdateOperationsInput | number
    leadId?: NullableStringFieldUpdateOperationsInput | string | null
    parentTeamId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    memberCount?: IntFieldUpdateOperationsInput | number
    leadId?: NullableStringFieldUpdateOperationsInput | string | null
    parentTeamId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiKeyUpsertWithWhereUniqueWithoutOwnerInput = {
    where: ApiKeyWhereUniqueInput
    update: XOR<ApiKeyUpdateWithoutOwnerInput, ApiKeyUncheckedUpdateWithoutOwnerInput>
    create: XOR<ApiKeyCreateWithoutOwnerInput, ApiKeyUncheckedCreateWithoutOwnerInput>
  }

  export type ApiKeyUpdateWithWhereUniqueWithoutOwnerInput = {
    where: ApiKeyWhereUniqueInput
    data: XOR<ApiKeyUpdateWithoutOwnerInput, ApiKeyUncheckedUpdateWithoutOwnerInput>
  }

  export type ApiKeyUpdateManyWithWhereWithoutOwnerInput = {
    where: ApiKeyScalarWhereInput
    data: XOR<ApiKeyUpdateManyMutationInput, ApiKeyUncheckedUpdateManyWithoutOwnerInput>
  }

  export type ApiKeyScalarWhereInput = {
    AND?: ApiKeyScalarWhereInput | ApiKeyScalarWhereInput[]
    OR?: ApiKeyScalarWhereInput[]
    NOT?: ApiKeyScalarWhereInput | ApiKeyScalarWhereInput[]
    id?: StringFilter<"ApiKey"> | string
    name?: StringFilter<"ApiKey"> | string
    keyHash?: StringFilter<"ApiKey"> | string
    keyIdDisplay?: StringFilter<"ApiKey"> | string
    scope?: StringNullableFilter<"ApiKey"> | string | null
    ownerId?: StringFilter<"ApiKey"> | string
    environment?: StringFilter<"ApiKey"> | string
    permissions?: JsonFilter<"ApiKey">
    status?: EnumApiKeyStatusFilter<"ApiKey"> | $Enums.ApiKeyStatus
    createdDate?: DateTimeFilter<"ApiKey"> | Date | string
    expiryDate?: DateTimeNullableFilter<"ApiKey"> | Date | string | null
    lastUsed?: DateTimeNullableFilter<"ApiKey"> | Date | string | null
  }

  export type ActiveSessionUpsertWithWhereUniqueWithoutUserInput = {
    where: ActiveSessionWhereUniqueInput
    update: XOR<ActiveSessionUpdateWithoutUserInput, ActiveSessionUncheckedUpdateWithoutUserInput>
    create: XOR<ActiveSessionCreateWithoutUserInput, ActiveSessionUncheckedCreateWithoutUserInput>
  }

  export type ActiveSessionUpdateWithWhereUniqueWithoutUserInput = {
    where: ActiveSessionWhereUniqueInput
    data: XOR<ActiveSessionUpdateWithoutUserInput, ActiveSessionUncheckedUpdateWithoutUserInput>
  }

  export type ActiveSessionUpdateManyWithWhereWithoutUserInput = {
    where: ActiveSessionScalarWhereInput
    data: XOR<ActiveSessionUpdateManyMutationInput, ActiveSessionUncheckedUpdateManyWithoutUserInput>
  }

  export type ActiveSessionScalarWhereInput = {
    AND?: ActiveSessionScalarWhereInput | ActiveSessionScalarWhereInput[]
    OR?: ActiveSessionScalarWhereInput[]
    NOT?: ActiveSessionScalarWhereInput | ActiveSessionScalarWhereInput[]
    id?: StringFilter<"ActiveSession"> | string
    userId?: StringFilter<"ActiveSession"> | string
    device?: StringNullableFilter<"ActiveSession"> | string | null
    location?: StringNullableFilter<"ActiveSession"> | string | null
    ip?: StringNullableFilter<"ActiveSession"> | string | null
    tokenHash?: StringFilter<"ActiveSession"> | string
    status?: EnumSessionStatusFilter<"ActiveSession"> | $Enums.SessionStatus
    loginTime?: DateTimeFilter<"ActiveSession"> | Date | string
    expiresAt?: DateTimeFilter<"ActiveSession"> | Date | string
  }

  export type UserProfileExtUpsertWithoutUserInput = {
    update: XOR<UserProfileExtUpdateWithoutUserInput, UserProfileExtUncheckedUpdateWithoutUserInput>
    create: XOR<UserProfileExtCreateWithoutUserInput, UserProfileExtUncheckedCreateWithoutUserInput>
    where?: UserProfileExtWhereInput
  }

  export type UserProfileExtUpdateToOneWithWhereWithoutUserInput = {
    where?: UserProfileExtWhereInput
    data: XOR<UserProfileExtUpdateWithoutUserInput, UserProfileExtUncheckedUpdateWithoutUserInput>
  }

  export type UserProfileExtUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    manager?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    roleTier?: NullableStringFieldUpdateOperationsInput | string | null
    agentPreferences?: JsonNullValueInput | InputJsonValue
    notificationPrefs?: JsonNullValueInput | InputJsonValue
    accessScopes?: JsonNullValueInput | InputJsonValue
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProfileExtUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    manager?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    roleTier?: NullableStringFieldUpdateOperationsInput | string | null
    agentPreferences?: JsonNullValueInput | InputJsonValue
    notificationPrefs?: JsonNullValueInput | InputJsonValue
    accessScopes?: JsonNullValueInput | InputJsonValue
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ThemePreferenceUpsertWithoutUserInput = {
    update: XOR<ThemePreferenceUpdateWithoutUserInput, ThemePreferenceUncheckedUpdateWithoutUserInput>
    create: XOR<ThemePreferenceCreateWithoutUserInput, ThemePreferenceUncheckedCreateWithoutUserInput>
    where?: ThemePreferenceWhereInput
  }

  export type ThemePreferenceUpdateToOneWithWhereWithoutUserInput = {
    where?: ThemePreferenceWhereInput
    data: XOR<ThemePreferenceUpdateWithoutUserInput, ThemePreferenceUncheckedUpdateWithoutUserInput>
  }

  export type ThemePreferenceUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    mode?: StringFieldUpdateOperationsInput | string
    accentColor?: NullableStringFieldUpdateOperationsInput | string | null
    uiDensity?: NullableStringFieldUpdateOperationsInput | string | null
    codeTheme?: NullableStringFieldUpdateOperationsInput | string | null
    visualizationStyle?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ThemePreferenceUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    mode?: StringFieldUpdateOperationsInput | string
    accentColor?: NullableStringFieldUpdateOperationsInput | string | null
    uiDensity?: NullableStringFieldUpdateOperationsInput | string | null
    codeTheme?: NullableStringFieldUpdateOperationsInput | string | null
    visualizationStyle?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutRoleInput = {
    id?: string
    email: string
    name: string
    passwordHash: string
    status?: $Enums.UserStatus
    joinedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    team?: TeamCreateNestedOneWithoutUsersInput
    apiKeys?: ApiKeyCreateNestedManyWithoutOwnerInput
    sessions?: ActiveSessionCreateNestedManyWithoutUserInput
    profileExt?: UserProfileExtCreateNestedOneWithoutUserInput
    themePrefs?: ThemePreferenceCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRoleInput = {
    id?: string
    email: string
    name: string
    passwordHash: string
    teamId?: string | null
    status?: $Enums.UserStatus
    joinedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    apiKeys?: ApiKeyUncheckedCreateNestedManyWithoutOwnerInput
    sessions?: ActiveSessionUncheckedCreateNestedManyWithoutUserInput
    profileExt?: UserProfileExtUncheckedCreateNestedOneWithoutUserInput
    themePrefs?: ThemePreferenceUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRoleInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput>
  }

  export type UserCreateManyRoleInputEnvelope = {
    data: UserCreateManyRoleInput | UserCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutRoleInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutRoleInput, UserUncheckedUpdateWithoutRoleInput>
    create: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput>
  }

  export type UserUpdateWithWhereUniqueWithoutRoleInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutRoleInput, UserUncheckedUpdateWithoutRoleInput>
  }

  export type UserUpdateManyWithWhereWithoutRoleInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutRoleInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    roleId?: StringNullableFilter<"User"> | string | null
    teamId?: StringNullableFilter<"User"> | string | null
    status?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
    joinedAt?: DateTimeFilter<"User"> | Date | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type UserCreateWithoutTeamInput = {
    id?: string
    email: string
    name: string
    passwordHash: string
    status?: $Enums.UserStatus
    joinedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: RoleCreateNestedOneWithoutUsersInput
    apiKeys?: ApiKeyCreateNestedManyWithoutOwnerInput
    sessions?: ActiveSessionCreateNestedManyWithoutUserInput
    profileExt?: UserProfileExtCreateNestedOneWithoutUserInput
    themePrefs?: ThemePreferenceCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTeamInput = {
    id?: string
    email: string
    name: string
    passwordHash: string
    roleId?: string | null
    status?: $Enums.UserStatus
    joinedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    apiKeys?: ApiKeyUncheckedCreateNestedManyWithoutOwnerInput
    sessions?: ActiveSessionUncheckedCreateNestedManyWithoutUserInput
    profileExt?: UserProfileExtUncheckedCreateNestedOneWithoutUserInput
    themePrefs?: ThemePreferenceUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTeamInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTeamInput, UserUncheckedCreateWithoutTeamInput>
  }

  export type UserCreateManyTeamInputEnvelope = {
    data: UserCreateManyTeamInput | UserCreateManyTeamInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutTeamInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutTeamInput, UserUncheckedUpdateWithoutTeamInput>
    create: XOR<UserCreateWithoutTeamInput, UserUncheckedCreateWithoutTeamInput>
  }

  export type UserUpdateWithWhereUniqueWithoutTeamInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutTeamInput, UserUncheckedUpdateWithoutTeamInput>
  }

  export type UserUpdateManyWithWhereWithoutTeamInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutTeamInput>
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    email: string
    name: string
    passwordHash: string
    status?: $Enums.UserStatus
    joinedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: RoleCreateNestedOneWithoutUsersInput
    team?: TeamCreateNestedOneWithoutUsersInput
    apiKeys?: ApiKeyCreateNestedManyWithoutOwnerInput
    profileExt?: UserProfileExtCreateNestedOneWithoutUserInput
    themePrefs?: ThemePreferenceCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    email: string
    name: string
    passwordHash: string
    roleId?: string | null
    teamId?: string | null
    status?: $Enums.UserStatus
    joinedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    apiKeys?: ApiKeyUncheckedCreateNestedManyWithoutOwnerInput
    profileExt?: UserProfileExtUncheckedCreateNestedOneWithoutUserInput
    themePrefs?: ThemePreferenceUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneWithoutUsersNestedInput
    team?: TeamUpdateOneWithoutUsersNestedInput
    apiKeys?: ApiKeyUpdateManyWithoutOwnerNestedInput
    profileExt?: UserProfileExtUpdateOneWithoutUserNestedInput
    themePrefs?: ThemePreferenceUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    roleId?: NullableStringFieldUpdateOperationsInput | string | null
    teamId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    apiKeys?: ApiKeyUncheckedUpdateManyWithoutOwnerNestedInput
    profileExt?: UserProfileExtUncheckedUpdateOneWithoutUserNestedInput
    themePrefs?: ThemePreferenceUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutApiKeysInput = {
    id?: string
    email: string
    name: string
    passwordHash: string
    status?: $Enums.UserStatus
    joinedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: RoleCreateNestedOneWithoutUsersInput
    team?: TeamCreateNestedOneWithoutUsersInput
    sessions?: ActiveSessionCreateNestedManyWithoutUserInput
    profileExt?: UserProfileExtCreateNestedOneWithoutUserInput
    themePrefs?: ThemePreferenceCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutApiKeysInput = {
    id?: string
    email: string
    name: string
    passwordHash: string
    roleId?: string | null
    teamId?: string | null
    status?: $Enums.UserStatus
    joinedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: ActiveSessionUncheckedCreateNestedManyWithoutUserInput
    profileExt?: UserProfileExtUncheckedCreateNestedOneWithoutUserInput
    themePrefs?: ThemePreferenceUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutApiKeysInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutApiKeysInput, UserUncheckedCreateWithoutApiKeysInput>
  }

  export type KeyActivityLogCreateWithoutKeyInput = {
    id?: string
    module: string
    action: string
    status: string
    ipAddress?: string | null
    timestamp?: Date | string
  }

  export type KeyActivityLogUncheckedCreateWithoutKeyInput = {
    id?: string
    module: string
    action: string
    status: string
    ipAddress?: string | null
    timestamp?: Date | string
  }

  export type KeyActivityLogCreateOrConnectWithoutKeyInput = {
    where: KeyActivityLogWhereUniqueInput
    create: XOR<KeyActivityLogCreateWithoutKeyInput, KeyActivityLogUncheckedCreateWithoutKeyInput>
  }

  export type KeyActivityLogCreateManyKeyInputEnvelope = {
    data: KeyActivityLogCreateManyKeyInput | KeyActivityLogCreateManyKeyInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutApiKeysInput = {
    update: XOR<UserUpdateWithoutApiKeysInput, UserUncheckedUpdateWithoutApiKeysInput>
    create: XOR<UserCreateWithoutApiKeysInput, UserUncheckedCreateWithoutApiKeysInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutApiKeysInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutApiKeysInput, UserUncheckedUpdateWithoutApiKeysInput>
  }

  export type UserUpdateWithoutApiKeysInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneWithoutUsersNestedInput
    team?: TeamUpdateOneWithoutUsersNestedInput
    sessions?: ActiveSessionUpdateManyWithoutUserNestedInput
    profileExt?: UserProfileExtUpdateOneWithoutUserNestedInput
    themePrefs?: ThemePreferenceUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutApiKeysInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    roleId?: NullableStringFieldUpdateOperationsInput | string | null
    teamId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: ActiveSessionUncheckedUpdateManyWithoutUserNestedInput
    profileExt?: UserProfileExtUncheckedUpdateOneWithoutUserNestedInput
    themePrefs?: ThemePreferenceUncheckedUpdateOneWithoutUserNestedInput
  }

  export type KeyActivityLogUpsertWithWhereUniqueWithoutKeyInput = {
    where: KeyActivityLogWhereUniqueInput
    update: XOR<KeyActivityLogUpdateWithoutKeyInput, KeyActivityLogUncheckedUpdateWithoutKeyInput>
    create: XOR<KeyActivityLogCreateWithoutKeyInput, KeyActivityLogUncheckedCreateWithoutKeyInput>
  }

  export type KeyActivityLogUpdateWithWhereUniqueWithoutKeyInput = {
    where: KeyActivityLogWhereUniqueInput
    data: XOR<KeyActivityLogUpdateWithoutKeyInput, KeyActivityLogUncheckedUpdateWithoutKeyInput>
  }

  export type KeyActivityLogUpdateManyWithWhereWithoutKeyInput = {
    where: KeyActivityLogScalarWhereInput
    data: XOR<KeyActivityLogUpdateManyMutationInput, KeyActivityLogUncheckedUpdateManyWithoutKeyInput>
  }

  export type KeyActivityLogScalarWhereInput = {
    AND?: KeyActivityLogScalarWhereInput | KeyActivityLogScalarWhereInput[]
    OR?: KeyActivityLogScalarWhereInput[]
    NOT?: KeyActivityLogScalarWhereInput | KeyActivityLogScalarWhereInput[]
    id?: StringFilter<"KeyActivityLog"> | string
    keyId?: StringFilter<"KeyActivityLog"> | string
    module?: StringFilter<"KeyActivityLog"> | string
    action?: StringFilter<"KeyActivityLog"> | string
    status?: StringFilter<"KeyActivityLog"> | string
    ipAddress?: StringNullableFilter<"KeyActivityLog"> | string | null
    timestamp?: DateTimeFilter<"KeyActivityLog"> | Date | string
  }

  export type ApiKeyCreateWithoutActivityLogsInput = {
    id?: string
    name: string
    keyHash: string
    keyIdDisplay: string
    scope?: string | null
    environment?: string
    permissions?: JsonNullValueInput | InputJsonValue
    status?: $Enums.ApiKeyStatus
    createdDate?: Date | string
    expiryDate?: Date | string | null
    lastUsed?: Date | string | null
    owner: UserCreateNestedOneWithoutApiKeysInput
  }

  export type ApiKeyUncheckedCreateWithoutActivityLogsInput = {
    id?: string
    name: string
    keyHash: string
    keyIdDisplay: string
    scope?: string | null
    ownerId: string
    environment?: string
    permissions?: JsonNullValueInput | InputJsonValue
    status?: $Enums.ApiKeyStatus
    createdDate?: Date | string
    expiryDate?: Date | string | null
    lastUsed?: Date | string | null
  }

  export type ApiKeyCreateOrConnectWithoutActivityLogsInput = {
    where: ApiKeyWhereUniqueInput
    create: XOR<ApiKeyCreateWithoutActivityLogsInput, ApiKeyUncheckedCreateWithoutActivityLogsInput>
  }

  export type ApiKeyUpsertWithoutActivityLogsInput = {
    update: XOR<ApiKeyUpdateWithoutActivityLogsInput, ApiKeyUncheckedUpdateWithoutActivityLogsInput>
    create: XOR<ApiKeyCreateWithoutActivityLogsInput, ApiKeyUncheckedCreateWithoutActivityLogsInput>
    where?: ApiKeyWhereInput
  }

  export type ApiKeyUpdateToOneWithWhereWithoutActivityLogsInput = {
    where?: ApiKeyWhereInput
    data: XOR<ApiKeyUpdateWithoutActivityLogsInput, ApiKeyUncheckedUpdateWithoutActivityLogsInput>
  }

  export type ApiKeyUpdateWithoutActivityLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    keyHash?: StringFieldUpdateOperationsInput | string
    keyIdDisplay?: StringFieldUpdateOperationsInput | string
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    environment?: StringFieldUpdateOperationsInput | string
    permissions?: JsonNullValueInput | InputJsonValue
    status?: EnumApiKeyStatusFieldUpdateOperationsInput | $Enums.ApiKeyStatus
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastUsed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    owner?: UserUpdateOneRequiredWithoutApiKeysNestedInput
  }

  export type ApiKeyUncheckedUpdateWithoutActivityLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    keyHash?: StringFieldUpdateOperationsInput | string
    keyIdDisplay?: StringFieldUpdateOperationsInput | string
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    environment?: StringFieldUpdateOperationsInput | string
    permissions?: JsonNullValueInput | InputJsonValue
    status?: EnumApiKeyStatusFieldUpdateOperationsInput | $Enums.ApiKeyStatus
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastUsed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserCreateWithoutProfileExtInput = {
    id?: string
    email: string
    name: string
    passwordHash: string
    status?: $Enums.UserStatus
    joinedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: RoleCreateNestedOneWithoutUsersInput
    team?: TeamCreateNestedOneWithoutUsersInput
    apiKeys?: ApiKeyCreateNestedManyWithoutOwnerInput
    sessions?: ActiveSessionCreateNestedManyWithoutUserInput
    themePrefs?: ThemePreferenceCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProfileExtInput = {
    id?: string
    email: string
    name: string
    passwordHash: string
    roleId?: string | null
    teamId?: string | null
    status?: $Enums.UserStatus
    joinedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    apiKeys?: ApiKeyUncheckedCreateNestedManyWithoutOwnerInput
    sessions?: ActiveSessionUncheckedCreateNestedManyWithoutUserInput
    themePrefs?: ThemePreferenceUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProfileExtInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProfileExtInput, UserUncheckedCreateWithoutProfileExtInput>
  }

  export type UserUpsertWithoutProfileExtInput = {
    update: XOR<UserUpdateWithoutProfileExtInput, UserUncheckedUpdateWithoutProfileExtInput>
    create: XOR<UserCreateWithoutProfileExtInput, UserUncheckedCreateWithoutProfileExtInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProfileExtInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProfileExtInput, UserUncheckedUpdateWithoutProfileExtInput>
  }

  export type UserUpdateWithoutProfileExtInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneWithoutUsersNestedInput
    team?: TeamUpdateOneWithoutUsersNestedInput
    apiKeys?: ApiKeyUpdateManyWithoutOwnerNestedInput
    sessions?: ActiveSessionUpdateManyWithoutUserNestedInput
    themePrefs?: ThemePreferenceUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProfileExtInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    roleId?: NullableStringFieldUpdateOperationsInput | string | null
    teamId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    apiKeys?: ApiKeyUncheckedUpdateManyWithoutOwnerNestedInput
    sessions?: ActiveSessionUncheckedUpdateManyWithoutUserNestedInput
    themePrefs?: ThemePreferenceUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutThemePrefsInput = {
    id?: string
    email: string
    name: string
    passwordHash: string
    status?: $Enums.UserStatus
    joinedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: RoleCreateNestedOneWithoutUsersInput
    team?: TeamCreateNestedOneWithoutUsersInput
    apiKeys?: ApiKeyCreateNestedManyWithoutOwnerInput
    sessions?: ActiveSessionCreateNestedManyWithoutUserInput
    profileExt?: UserProfileExtCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutThemePrefsInput = {
    id?: string
    email: string
    name: string
    passwordHash: string
    roleId?: string | null
    teamId?: string | null
    status?: $Enums.UserStatus
    joinedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    apiKeys?: ApiKeyUncheckedCreateNestedManyWithoutOwnerInput
    sessions?: ActiveSessionUncheckedCreateNestedManyWithoutUserInput
    profileExt?: UserProfileExtUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutThemePrefsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutThemePrefsInput, UserUncheckedCreateWithoutThemePrefsInput>
  }

  export type UserUpsertWithoutThemePrefsInput = {
    update: XOR<UserUpdateWithoutThemePrefsInput, UserUncheckedUpdateWithoutThemePrefsInput>
    create: XOR<UserCreateWithoutThemePrefsInput, UserUncheckedCreateWithoutThemePrefsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutThemePrefsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutThemePrefsInput, UserUncheckedUpdateWithoutThemePrefsInput>
  }

  export type UserUpdateWithoutThemePrefsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneWithoutUsersNestedInput
    team?: TeamUpdateOneWithoutUsersNestedInput
    apiKeys?: ApiKeyUpdateManyWithoutOwnerNestedInput
    sessions?: ActiveSessionUpdateManyWithoutUserNestedInput
    profileExt?: UserProfileExtUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutThemePrefsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    roleId?: NullableStringFieldUpdateOperationsInput | string | null
    teamId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    apiKeys?: ApiKeyUncheckedUpdateManyWithoutOwnerNestedInput
    sessions?: ActiveSessionUncheckedUpdateManyWithoutUserNestedInput
    profileExt?: UserProfileExtUncheckedUpdateOneWithoutUserNestedInput
  }

  export type ApiKeyCreateManyOwnerInput = {
    id?: string
    name: string
    keyHash: string
    keyIdDisplay: string
    scope?: string | null
    environment?: string
    permissions?: JsonNullValueInput | InputJsonValue
    status?: $Enums.ApiKeyStatus
    createdDate?: Date | string
    expiryDate?: Date | string | null
    lastUsed?: Date | string | null
  }

  export type ActiveSessionCreateManyUserInput = {
    id?: string
    device?: string | null
    location?: string | null
    ip?: string | null
    tokenHash: string
    status?: $Enums.SessionStatus
    loginTime?: Date | string
    expiresAt: Date | string
  }

  export type ApiKeyUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    keyHash?: StringFieldUpdateOperationsInput | string
    keyIdDisplay?: StringFieldUpdateOperationsInput | string
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    environment?: StringFieldUpdateOperationsInput | string
    permissions?: JsonNullValueInput | InputJsonValue
    status?: EnumApiKeyStatusFieldUpdateOperationsInput | $Enums.ApiKeyStatus
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastUsed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activityLogs?: KeyActivityLogUpdateManyWithoutKeyNestedInput
  }

  export type ApiKeyUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    keyHash?: StringFieldUpdateOperationsInput | string
    keyIdDisplay?: StringFieldUpdateOperationsInput | string
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    environment?: StringFieldUpdateOperationsInput | string
    permissions?: JsonNullValueInput | InputJsonValue
    status?: EnumApiKeyStatusFieldUpdateOperationsInput | $Enums.ApiKeyStatus
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastUsed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activityLogs?: KeyActivityLogUncheckedUpdateManyWithoutKeyNestedInput
  }

  export type ApiKeyUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    keyHash?: StringFieldUpdateOperationsInput | string
    keyIdDisplay?: StringFieldUpdateOperationsInput | string
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    environment?: StringFieldUpdateOperationsInput | string
    permissions?: JsonNullValueInput | InputJsonValue
    status?: EnumApiKeyStatusFieldUpdateOperationsInput | $Enums.ApiKeyStatus
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastUsed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ActiveSessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    device?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    tokenHash?: StringFieldUpdateOperationsInput | string
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    loginTime?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActiveSessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    device?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    tokenHash?: StringFieldUpdateOperationsInput | string
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    loginTime?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActiveSessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    device?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    tokenHash?: StringFieldUpdateOperationsInput | string
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    loginTime?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyRoleInput = {
    id?: string
    email: string
    name: string
    passwordHash: string
    teamId?: string | null
    status?: $Enums.UserStatus
    joinedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: TeamUpdateOneWithoutUsersNestedInput
    apiKeys?: ApiKeyUpdateManyWithoutOwnerNestedInput
    sessions?: ActiveSessionUpdateManyWithoutUserNestedInput
    profileExt?: UserProfileExtUpdateOneWithoutUserNestedInput
    themePrefs?: ThemePreferenceUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    teamId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    apiKeys?: ApiKeyUncheckedUpdateManyWithoutOwnerNestedInput
    sessions?: ActiveSessionUncheckedUpdateManyWithoutUserNestedInput
    profileExt?: UserProfileExtUncheckedUpdateOneWithoutUserNestedInput
    themePrefs?: ThemePreferenceUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    teamId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyTeamInput = {
    id?: string
    email: string
    name: string
    passwordHash: string
    roleId?: string | null
    status?: $Enums.UserStatus
    joinedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneWithoutUsersNestedInput
    apiKeys?: ApiKeyUpdateManyWithoutOwnerNestedInput
    sessions?: ActiveSessionUpdateManyWithoutUserNestedInput
    profileExt?: UserProfileExtUpdateOneWithoutUserNestedInput
    themePrefs?: ThemePreferenceUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    roleId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    apiKeys?: ApiKeyUncheckedUpdateManyWithoutOwnerNestedInput
    sessions?: ActiveSessionUncheckedUpdateManyWithoutUserNestedInput
    profileExt?: UserProfileExtUncheckedUpdateOneWithoutUserNestedInput
    themePrefs?: ThemePreferenceUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    roleId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KeyActivityLogCreateManyKeyInput = {
    id?: string
    module: string
    action: string
    status: string
    ipAddress?: string | null
    timestamp?: Date | string
  }

  export type KeyActivityLogUpdateWithoutKeyInput = {
    id?: StringFieldUpdateOperationsInput | string
    module?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KeyActivityLogUncheckedUpdateWithoutKeyInput = {
    id?: StringFieldUpdateOperationsInput | string
    module?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KeyActivityLogUncheckedUpdateManyWithoutKeyInput = {
    id?: StringFieldUpdateOperationsInput | string
    module?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}