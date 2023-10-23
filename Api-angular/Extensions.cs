using NetCoreAPI.Repositories;

namespace Api_angular
{
    public static class Extensions
    {

        public static IEnumerable<T> WhereIf<T>(this IEnumerable<T> source, string isValidated, Func<T, bool> predicate)
        {
            if (isValidated != "")
            {
                return source.Where(predicate);
            }

            return source;
        }
    }
}
