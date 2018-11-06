import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const appRoutes: Routes = [

	{ path: '', pathMatch: 'full', redirectTo: 'home' },
	{
		path: 'home',
		loadChildren: 'src/app/components/home/home.module#HomeModule'
	},
	{
		path: 'tipo-produto',
		loadChildren: 'src/app/components/tipoproduto/tipo-produto.module#TipoProdutoModule'
	},
	{
		path: 'pessoa',
		loadChildren: 'src/app/components/pessoa/pessoa.module#PessoaModule'
	},
	{
		path: 'parametrosistema',
		loadChildren: 'src/app/components/parametrosistema/parametro-sistema.module#ParametroSistemaModule'
	}

];

@NgModule({
	imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
	exports: [RouterModule],
})
export class AppRoutingModule { }
