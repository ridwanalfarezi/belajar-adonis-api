import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method

    await User.createMany([
      {
        name: 'Admin',
        email: 'admin@admin.com',
        password: '12345678',
      },
      {
        name: 'User',
        email: 'user@user.com',
        password: '12345678',
      },
    ])
  }
}
