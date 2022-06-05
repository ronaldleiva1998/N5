using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Elasticsearch.Net;
using pjChallengeN5.Models;

namespace pjChallengeN5
{
    public class Program
    {
        public static void Main(string[] args)
        {
            CreateHostBuilder(args).Build().Run();

            // Elasticsearch
            //var setting = new ConnectionConfiguration(new Uri("http://locaclhost:9200"))
            //    .RequestTimeout(TimeSpan.FromMinutes(2));
            //var client = new ElasticLowLevelClient(setting);

            //var permisos = new Permisos("Ronald",)
            //fin
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });
    }
}
