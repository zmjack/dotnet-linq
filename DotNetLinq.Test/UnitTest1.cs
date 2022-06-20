using System;
using System.Collections.Generic;
using System.Linq;
using Xunit;

namespace DotNetLinq.Test
{
    public class UnitTest1
    {
        static Champion lux = new Champion { name = "Lux", win = 50.16, rank = 4, counter = new Champion[0] };
        static Champion lissandra = new Champion { name = "Lissandra", win = 49.96, rank = 4, counter = new Champion[0] };
        static Champion ahri = new Champion { name = "Ahri", win = 50.62, rank = 4, counter = new Champion[0] };

        static Champion annie = new Champion { name = "Annie", win = 50.42, rank = 3, counter = new Champion[0] };
        static Champion anivia = new Champion { name = "Anivia", win = 52.03, rank = 1, counter = new Champion[] { lux, lissandra } };
        static Champion ashe = new Champion { name = "Ashe", win = 52.21, rank = 1, counter = new Champion[] { ahri } };
        static Champion blitzcrank = new Champion { name = "Blitzcrank", win = 51.37, rank = 2, counter = new Champion[0] };
        static Champion brand = new Champion { name = "Brand", win = 52.17, rank = 1, counter = new Champion[] { lux } };
        static Champion caitlyn = new Champion { name = "Caitlyn", win = 50.5, rank = 2, counter = new Champion[0] };

        Champion[] getRecords() => new[] { annie, anivia, ashe, blitzcrank, brand, caitlyn };
        Champion[] getRecords2() => new[] { annie, anivia, ashe, lux, lissandra, ahri };

        Game[] games = new[]
        {
            new Game { champion = "Anivia", time= DateTime.Now },
            new Game { champion = "Ashe", time= DateTime.Now },
            new Game { champion = "Ashe", time= DateTime.Now },
            new Game { champion = "Anivia", time= DateTime.Now },
            new Game { champion = "Brand", time= DateTime.Now },
            new Game { champion = "Anivia", time= DateTime.Now },
        };

        public static class assert
        {
            public static void deepEqual<T>(IEnumerable<T> actual, IEnumerable<T> expected) => Assert.Equal(expected, actual);
            public static void deepEqual<T>(T actual, T expected) => Assert.Equal(expected, actual);
            public static void throws(Action testCode) => Assert.ThrowsAny<Exception>(testCode);
        }

        [Fact]
        public void SelectTest()
        {
            var records = getRecords();
            assert.deepEqual(records.Select(x => x.name), new[] { "Annie", "Anivia", "Ashe", "Blitzcrank", "Brand", "Caitlyn" });
        }
        [Fact]
        public void SelectManyTest()
        {
            var records = getRecords();
            assert.deepEqual(records.SelectMany(x => x.counter).Select(x => x.name), new[] { "Lux", "Lissandra", "Ahri", "Lux" });
        }

        [Fact]
        public void WhereTest()
        {
            var records = getRecords();
            assert.deepEqual(records.Where(x => x.name.StartsWith("A")).Select(x => x.name), new[] { "Annie", "Anivia", "Ashe" });
        }
        [Fact]
        public void AllTest()
        {
            var records = getRecords();
            assert.deepEqual(records.All(x => x.win > 50), true);
            assert.deepEqual(records.All(x => x.win > 51), false);
        }
        [Fact]
        public void CountTest()
        {
            var records = getRecords();
            assert.deepEqual(records.Count(), 6);
            assert.deepEqual(records.Count(x => x.name.StartsWith("B")), 2);
        }
        [Fact]
        public void AnyTest()
        {
            var records = getRecords();
            assert.deepEqual(records.Any(), true);
            assert.deepEqual(records.Any(x => x.win < 50), false);
        }

        [Fact]
        public void SumTest()
        {
            var records = getRecords();
            assert.deepEqual(records.Sum(x => x.rank), 10);
        }
        [Fact]
        public void AverageTest()
        {
            var records = getRecords();
            assert.deepEqual(records.Average(x => x.rank), (double)10 / 6);
        }
        [Fact]
        public void MinTest()
        {
            var records = getRecords();
            assert.deepEqual(records.Min(x => x.win), 50.42);
            assert.deepEqual(new[] { 5, 6, 2, 3 }.Min(), 2);
        }
        [Fact]
        public void MaxTest()
        {
            var records = getRecords();
            assert.deepEqual(records.Max(x => x.win), 52.21);
            assert.deepEqual(new[] { 5, 6, 2, 3 }.Max(), 6);
        }

        [Fact]
        public void TakeTest()
        {
            var records = getRecords();
            assert.deepEqual(records.Take(2).Select(x => x.name), new[] { "Annie", "Anivia" });
        }
        [Fact]
        public void TakeLast()
        {
            var records = getRecords();
            assert.deepEqual(records.TakeLast(2).Select(x => x.name), new[] { "Brand", "Caitlyn" });
        }
        [Fact]
        public void TakeWhileTest()
        {
            var records = getRecords();
            assert.deepEqual(records.TakeWhile(x => x.name.StartsWith("A")).Select(x => x.name), new[] { "Annie", "Anivia", "Ashe" });
        }
        [Fact]
        public void SkipTest()
        {
            var records = getRecords();
            assert.deepEqual(records.Skip(4).Select(x => x.name), new[] { "Brand", "Caitlyn" });
        }
        [Fact]
        public void SkipLastTest()
        {
            var records = getRecords();
            assert.deepEqual(records.SkipLast(4).Select(x => x.name), new[] { "Annie", "Anivia" });
        }
        [Fact]
        public void SkipWhileTest()
        {
            var records = getRecords();
            assert.deepEqual(records.SkipWhile(x => x.name.StartsWith("A")).Select(x => x.name), new[] { "Blitzcrank", "Brand", "Caitlyn" });
        }

        [Fact]
        public void FirstOrDefaultTest()
        {
            var records = getRecords();
            assert.deepEqual(records.FirstOrDefault().name, "Annie");
            assert.deepEqual(records.FirstOrDefault(x => x.name.StartsWith("D")), null);
        }
        [Fact]
        public void FirstTest()
        {
            var records = getRecords();
            assert.deepEqual(records.First().name, "Annie");
            assert.throws(() => records.First(x => x.name.StartsWith("D")));
        }
        [Fact]
        public void LastOrDefaultTest()
        {
            var records = getRecords();
            assert.deepEqual(records.LastOrDefault().name, "Caitlyn");
            assert.deepEqual(records.LastOrDefault(x => x.name.StartsWith("D")), null);
        }
        [Fact]
        public void LastTest()
        {
            var records = getRecords();
            assert.deepEqual(records.Last().name, "Caitlyn");
            assert.throws(() => records.Last(x => x.name.StartsWith("D")));
        }
        [Fact]
        public void SingleOrDefaultTest()
        {
            var records = getRecords();
            assert.throws(() => records.SingleOrDefault());
            assert.deepEqual(records.SingleOrDefault(x => x.name.StartsWith("C")).name, "Caitlyn");
            assert.deepEqual(records.SingleOrDefault(x => x.name.StartsWith("D")), null);
        }
        [Fact]
        public void SingleTest()
        {
            var records = getRecords();
            assert.throws(() => records.Single());
            assert.deepEqual(records.Single(x => x.name.StartsWith("C")).name, "Caitlyn");
            assert.throws(() => records.Single(x => x.name.StartsWith("D")));
        }

        [Fact]
        public void IntersectTest()
        {
            var records = getRecords();
            var records2 = getRecords2();
            assert.deepEqual(records.Intersect(records2).Select(x => x.name), new[] { "Annie", "Anivia", "Ashe" });
        }
        [Fact]
        public void ExceptTest()
        {
            var records = getRecords();
            var records2 = getRecords2();
            assert.deepEqual(records.Except(records2).Select(x => x.name), new[] { "Blitzcrank", "Brand", "Caitlyn" });
        }
        [Fact]
        public void UnionTest()
        {
            var records = getRecords();
            var records2 = getRecords2();
            assert.deepEqual(records.Union(records2).Select(x => x.name), new[] { "Annie", "Anivia", "Ashe", "Blitzcrank", "Brand", "Caitlyn", "Lux", "Lissandra", "Ahri" });
        }

        [Fact]
        public void SequenceEqualTest()
        {
            var records = getRecords();
            assert.deepEqual(true, records.Select(x => x.name).SequenceEqual(new[] { "Annie", "Anivia", "Ashe", "Blitzcrank", "Brand", "Caitlyn" }));
        }
        [Fact]
        public void ContainsTest()
        {
            var records = getRecords();
            assert.deepEqual(true, records.Contains(ashe));
            assert.deepEqual(false, records.Contains(lux));
        }

        [Fact]
        public void OrderByThenByDescendingTest()
        {
            var records = getRecords();
            assert.deepEqual(true, records.Select(x => x.name).SequenceEqual(new[] { "Annie", "Anivia", "Ashe", "Blitzcrank", "Brand", "Caitlyn" }));
        }
        [Fact]
        public void OrderByDescendingThenByTest()
        {
            var records = getRecords();
            var result = records.OrderByDescending(x => x.rank).ThenBy(x => x.win).ToArray().Select(x => x.name);
            assert.deepEqual(result, new[] { "Annie", "Caitlyn", "Blitzcrank", "Anivia", "Brand", "Ashe" });
        }

        [Fact]
        public void GroupByTest()
        {
            var records = getRecords();
            var result = records.GroupBy(x => x.rank).ToArray();
            assert.deepEqual(result[0].Key, 3);
            assert.deepEqual(result[0].Select(x => x.name), new[] { "Annie" });
            assert.deepEqual(result[1].Key, 1);
            assert.deepEqual(result[1].Select(x => x.name), new[] { "Anivia", "Ashe", "Brand" });
            assert.deepEqual(result[2].Key, 2);
            assert.deepEqual(result[2].Select(x => x.name), new[] { "Blitzcrank", "Caitlyn" });
        }
        [Fact]
        public void GroupByTest2()
        {
            var records = getRecords();
            var result = records.GroupBy(x => new { x.rank }).ToArray();
            assert.deepEqual(result[0].Key, new { rank = 3 });
            assert.deepEqual(result[0].Select(x => x.name), new[] { "Annie" });
            assert.deepEqual(result[1].Key, new { rank = 1 });
            assert.deepEqual(result[1].Select(x => x.name), new[] { "Anivia", "Ashe", "Brand" });
            assert.deepEqual(result[2].Key, new { rank = 2 });
            assert.deepEqual(result[2].Select(x => x.name), new[] { "Blitzcrank", "Caitlyn" });
        }
        [Fact]
        public void GroupJoinTest()
        {
            var records = getRecords();
            var result = records.GroupJoin(games, x => x.name, x => x.champion, (o, i) =>
            {
                return new GameStat
                {
                    champion = o.name,
                    count = i.Count(),
                };
            });
            assert.deepEqual(result, new[]
            {
                new GameStat { champion = "Annie", count = 0 },
                new GameStat { champion = "Anivia", count= 3 },
                new GameStat { champion = "Ashe", count= 2 },
                new GameStat { champion = "Blitzcrank", count= 0 },
                new GameStat { champion = "Brand", count= 1 },
                new GameStat { champion = "Caitlyn", count= 0 },
            });
        }

        [Fact]
        public void ZipTest()
        {
            assert.deepEqual(new[] { 1, 2 }.Zip(new[] { "a", "b", "c" }), new[] { (1, "a"), (2, "b") });
            var result = new[] { 1, 2 }.Zip(new[] { "a", "b", "c" }, (first, second) =>
            {
                return new { f = first, s = second };
            });
            assert.deepEqual(result, new[] { new { f = 1, s = "a" }, new { f = 2, s = "b" } }); ;
        }

        [Fact]
        public void AggregateTest()
        {
            assert.deepEqual(new[] { 2, 3, 4 }.Aggregate(5, (prev, current) => prev * current), 120);
            assert.deepEqual(new[] { 2, 3, 4 }.Aggregate(5, (prev, current) => prev * current, result => "result = " + result), "result = 120");
        }

        [Fact]
        public void GefaultIfEmpty()
        {
            assert.deepEqual(new[] { "a", "b" }.DefaultIfEmpty(), new[] { "a", "b" });
            assert.deepEqual(new string[0].DefaultIfEmpty(), new string[] { null });
        }

    }
}
