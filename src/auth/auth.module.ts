import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UsuarioModule } from 'src/usuario/usuario.module';
import { AuthService } from './auth.service';
import { jwtConstants } from './constants';



@Module({
  imports: [UsuarioModule,
    JwtModule.register({
      global: false,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '1d' }, // trocar o tempo depois
    }),
  ],
  providers: [AuthService],
  exports: [AuthService, JwtModule]
})
export class AuthModule {}
