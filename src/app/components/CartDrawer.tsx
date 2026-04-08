"use client";
import { X, Minus, Plus, ShoppingBag } from "lucide-react";

interface CartItem {
  id: number;
  name: string;
  variant: string;
  price: number;
  qty: number;
  image: string;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQty: (id: number, qty: number) => void;
}

export default function CartDrawer({ isOpen, onClose, items, onUpdateQty }: CartDrawerProps) {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <>
      <div className={`cart-overlay ${isOpen ? "open" : ""}`} onClick={onClose} />
      <div className={`cart-drawer ${isOpen ? "open" : ""}`} role="dialog" aria-label="Shopping cart">
        <div className="cart-header">
          <h2 className="cart-title">Your Cart</h2>
          <button className="cart-close" onClick={onClose} aria-label="Close cart">
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="cart-empty">
            <div className="cart-empty-icon">
              <ShoppingBag size={48} strokeWidth={1} />
            </div>
            <p>Your cart is empty</p>
            <a
              href="#collections"
              onClick={onClose}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.68rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--color-accent)",
                textDecoration: "none",
                borderBottom: "1px solid var(--color-accent)",
                paddingBottom: "2px",
                marginTop: "8px",
              }}
            >
              Explore Collections
            </a>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {items.map((item) => (
                <div key={item.id} className="cart-item">
                  <div
                    className="cart-item-img"
                    style={{
                      background: "linear-gradient(135deg, #ede8e1 0%, #d8cfc3 100%)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#bbb",
                      fontSize: "0.6rem",
                      letterSpacing: "0.1em",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    {item.name.charAt(0)}
                  </div>
                  <div className="cart-item-details">
                    <div className="cart-item-name">{item.name}</div>
                    <div className="cart-item-variant">{item.variant}</div>
                    <div className="cart-item-qty">
                      <button
                        className="qty-btn"
                        onClick={() => onUpdateQty(item.id, Math.max(0, item.qty - 1))}
                        aria-label="Decrease quantity"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="qty-num">{item.qty}</span>
                      <button
                        className="qty-btn"
                        onClick={() => onUpdateQty(item.id, item.qty + 1)}
                        aria-label="Increase quantity"
                      >
                        <Plus size={12} />
                      </button>
                    </div>
                  </div>
                  <div className="cart-item-price">
                    Dhs. {(item.price * item.qty).toLocaleString()}
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-footer">
              <div className="cart-subtotal">
                <span className="cart-subtotal-label">Subtotal</span>
                <span className="cart-subtotal-price">Dhs. {subtotal.toLocaleString()}</span>
              </div>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.7rem",
                  color: "#aaa",
                  marginBottom: "20px",
                  letterSpacing: "0.04em",
                  fontWeight: 300,
                }}
              >
                Shipping & VAT calculated at checkout
              </p>
              <button className="btn-checkout">Proceed to Checkout</button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
