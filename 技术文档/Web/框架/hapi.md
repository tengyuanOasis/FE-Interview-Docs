Hapi 与 Express 对标的框架， 与Express的最大差异：
1、Express注重定制化的中间件，  Hapi框架涵盖所有可用的前端功能。
Hapi的思想： 提供健壮的框架，比高性能更关键。 机器处理能力越来越高，并且越来越便宜，但是人工成本是越来越高的，所以可读性强，健壮的框架比性能更重要。

When quality and performance are in conflict, most frameworks choose wrongly and sacrifice quality for performance. It might save them a millisecond, but it will cost you days. hapi always chooses readability. Machines keep getting faster and cheaper. Humans only get slower and more expensive.

个人观点： 对于一个熟练使用Express的人， hapi没什么特别的亮点让我们迁移过去。但是对于新手来说这个框架可以让他的系统更健壮，因为很多有用并且容易被忽略的功能集成在框架里边，能够更容易上手使用。