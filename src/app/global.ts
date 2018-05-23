export var global = {
    _usuarioLogado: null,
    setUsuarioLogado(usuario) {
      this._usuarioLogado = usuario
    },
    getUsuarioLogado() {
      return this._usuarioLogado
    }
  }