using System;

    class Program
    {
        static void Main()
        {
            int m, n, x = 0;
            Console.WriteLine("Введите кол-во элементов 1 массива: ");
            m = int.Parse(Console.ReadLine());
            int[]m1 = new int[m];
            Console.WriteLine("Поочереди введите элементы в 1 массив: ");
            for (int i = 0; i < m; i++)
            {
                m1[i] = int.Parse(Console.ReadLine());
            }
            Console.WriteLine("Введите кол-во элементов 2 массива: ");
            n = int.Parse(Console.ReadLine());
            int[] m2 = new int[n];
            Console.WriteLine("Поочереди введите элементы во 2 массив: ");
            for (int i = 0; i < n; i++)
            {
                m2[i] = int.Parse(Console.ReadLine());
            }
            int[] m3 = new int[m + n];
            for (int i = 0; i < m; i++)
            {
                m3[i] = m1[i];
            }
            for (int i = m; x < n; x++)
            {
                m3[i] = m2[x];
                i++;
            }
            Console.WriteLine("Элементы суммарного массива: ");
            for (int l = 0; l < (m + n); l++)
            {
                Console.Write(m3[l] + " ");
            }
            Console.ReadLine();
        }
    }

