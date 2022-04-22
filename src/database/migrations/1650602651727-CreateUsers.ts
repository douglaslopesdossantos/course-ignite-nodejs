import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUsers1650602651727 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "users",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
            isGenerated: true,
          },
          {
            name: "name",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "username",
            type: "varchar",
            isNullable: false,
            isUnique: true
          },
          {
            name: "password",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "email",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "driver_license",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "isAdmin",
            type: "boolean",
            default: false,
            isNullable: false
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("users")
  }
}
