﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using pjChallengeN5.Data;

namespace pjChallengeN5.Migrations
{
    [DbContext(typeof(ApplicationDbContext))]
    [Migration("20220601225537_AgregarPermisos")]
    partial class AgregarPermisos
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.3")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("pjChallengeN5.Models.Permisos", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("ApellidoEmpleado")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("FechaPermiso")
                        .HasColumnType("datetime2");

                    b.Property<string>("NombreEmpleado")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("TipoPermiso")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("TipoPermiso");

                    b.ToTable("Permisos");
                });

            modelBuilder.Entity("pjChallengeN5.Models.TipoPermisos", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Descripcion")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("TipoPermisos");
                });

            modelBuilder.Entity("pjChallengeN5.Models.Permisos", b =>
                {
                    b.HasOne("pjChallengeN5.Models.TipoPermisos", "FK_TipoPermiso")
                        .WithMany("Permisos")
                        .HasForeignKey("TipoPermiso")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("FK_TipoPermiso");
                });

            modelBuilder.Entity("pjChallengeN5.Models.TipoPermisos", b =>
                {
                    b.Navigation("Permisos");
                });
#pragma warning restore 612, 618
        }
    }
}
