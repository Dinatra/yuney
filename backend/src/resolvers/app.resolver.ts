import { Resolver, Query, Args } from '@nestjs/graphql';

@Resolver()
export class AppResolver {
  @Query((returns) => String)
  helloWorld(): string {
    return 'Hello there!';
  }
  @Query((returns) => String)
  hello(@Args('name') name: string): string {
    return `Hello ${name}!`;
  }
}
